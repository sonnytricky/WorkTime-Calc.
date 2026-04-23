// ======================
// Zeiteingaben
// ======================
// Sollzeit
const sollZeitGesamt = document.getElementById("sollZeitGesamt");

// Beginn Arbeitstag
const startArbeitstag = document.getElementById("startArbeitstag");

// Pause am Vormittag
const vmPauseStart = document.getElementById("vmPauseStart");
const vmPauseEnde = document.getElementById("vmPauseEnde");

// Mittagspause
const mittagsPauseStart = document.getElementById("mittagsPauseStart");
const mittagsPauseEnde = document.getElementById("mittagsPauseEnde");

// Pause am Nachmittag
const nmPauseStart = document.getElementById("nmPauseStart");
const nmPauseEnde = document.getElementById("nmPauseEnde");

// ======================
// Eventlistener
// ======================
vmPauseStart.addEventListener("input", berechnungVmPause);
vmPauseEnde.addEventListener("input", berechnungVmPause);
mittagsPauseStart.addEventListener("input", berechnungMittagsPause);
mittagsPauseEnde.addEventListener("input", berechnungMittagsPause);
nmPauseStart.addEventListener("input", berechnungNmPause);
nmPauseEnde.addEventListener("input", berechnungNmPause);

document.getElementById("reset").addEventListener("click", clearData);

// saveData
[
  sollZeitGesamt,
  startArbeitstag,
  vmPauseStart, vmPauseEnde,
  mittagsPauseStart, mittagsPauseEnde,
  nmPauseStart, nmPauseEnde
].forEach(el => {
  el.addEventListener("input", saveData);
});

// ======================
// Hilfsfunktionen
// ======================
// Berechnet Stunden in Minuten und schaut ob irgendwo keine Pause gemacht wurde oder eine Ungültige Zeit verwendet wurde
function timeToMinutes(input) {
  const value = typeof input === "string" ? input : input.value;

  // wenn leer → 0 Minuten
  if (!value) {return 0;}

  const [h, m] = value.split(":").map(Number);

  // Sicherheit falls irgendwas schief ist
  if (isNaN(h) || isNaN(m)) {return 0;}

  return h * 60 + m;
}

// ======================
// Berechnung
// ======================

const state = {
  vm: 0,
  mittag: 0,
  nm: 0
};

// checkboxen
[startArbeitstag, sollZeitGesamt].forEach(el => {
  el.addEventListener("input", berechneFeierabend);
});


// VM Pause
function berechnungVmPause() {

  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!vmPauseStart.value || !vmPauseEnde.value) {
    state.vm = 0;
  } else {
    const start = timeToMinutes(vmPauseStart);
    const ende = timeToMinutes(vmPauseEnde);
    state.vm = Math.max(0, ende - start);
  }

  render();
}

// mittag
function berechnungMittagsPause() {
  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!mittagsPauseStart.value || !mittagsPauseEnde.value) {
    state.mittag = 0;
  } else {
    const start = timeToMinutes(mittagsPauseStart);
    const ende = timeToMinutes(mittagsPauseEnde);
    state.mittag = Math.max(0, ende - start);
  }

  render();
}

// NM Pause
function berechnungNmPause() {
  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!nmPauseStart.value || !nmPauseEnde.value) {
    state.nm = 0;
  } else {
    const start = timeToMinutes(nmPauseStart);
    const ende = timeToMinutes(nmPauseEnde);
    state.nm = Math.max(0, ende - start);
  }

  render();
}

function berechneFeierabend() {
  if (!startArbeitstag.value) {
    document.getElementById("feierabendOutput").textContent = "--:--";
    return;
  }

  const start = timeToMinutes(startArbeitstag);
  const arbeitszeit = timeToMinutes(sollZeitGesamt.value || "08:30");

  const vmAktiv = document.getElementById("checkboxVmPause").checked;
  const mittagAktiv = document.getElementById("checkboxMittagsPause").checked;
  const nmAktiv = document.getElementById("checkboxNmPause").checked;

  const gesamt =
    arbeitszeit +
    (vmAktiv ? state.vm : 0) +
    (mittagAktiv ? state.mittag : 0) +
    (nmAktiv ? state.nm : 0);

  const endeMin = start + gesamt;

  const h = Math.floor(endeMin / 60);
  const m = endeMin % 60;

  document.getElementById("feierabendOutput").textContent =
    h.toString().padStart(2, "0") + ":" +
    m.toString().padStart(2, "0");
}

// ======================
// Renderfunktion
// ======================
function render() {
  document.getElementById("vmErgebnis").textContent = state.vm;
  document.getElementById("mittagsErgebnis").textContent = state.mittag;
  document.getElementById("nmErgebnis").textContent = state.nm;

  berechneFeierabend();
}

// ======================
// Button
// ======================
document.querySelector("#feierabendBtn").addEventListener("click", berechneFeierabend);

// ======================
// Für das Menü bzw. Views
// ======================
// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  const btn = document.querySelector(".menu-btn");
  const settings = document.getElementById("settingsView");

  btn.classList.toggle("x");
  settings.classList.toggle("active");
}

// ======================
// Speicher - localStorage
// ======================
function saveData() {
  const data = {
    sollZeitGesamt: sollZeitGesamt.value,
    startArbeitstag: startArbeitstag.value,
    vmPauseStart: vmPauseStart.value,
    vmPauseEnde: vmPauseEnde.value,
    mittagsPauseStart: mittagsPauseStart.value,
    mittagsPauseEnde: mittagsPauseEnde.value,
    nmPauseStart: nmPauseStart.value,
    nmPauseEnde: nmPauseEnde.value
  };

  localStorage.setItem("arbeitszeitData", JSON.stringify(data));
}

// Dateien wieder laden
function loadData() {
  const saved = localStorage.getItem("arbeitszeitData");
  if (!saved) {return;}

  const data = JSON.parse(saved);

  sollZeitGesamt.value = data.sollZeitGesamt || "";
  startArbeitstag.value = data.startArbeitstag || "";
  vmPauseStart.value = data.vmPauseStart || "";
  vmPauseEnde.value = data.vmPauseEnde || "";
  mittagsPauseStart.value = data.mittagsPauseStart || "";
  mittagsPauseEnde.value = data.mittagsPauseEnde || "";
  nmPauseStart.value = data.nmPauseStart || "";
  nmPauseEnde.value = data.nmPauseEnde || "";

  // neu berechnen nach Laden
  berechnungVmPause();
  berechnungMittagsPause();
  berechnungNmPause();
}

// Reset Button
function clearData() {
  localStorage.removeItem("arbeitszeitData");
  location.reload();
}

loadData();
berechneFeierabend();
