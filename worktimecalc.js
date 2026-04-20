// ======================
// Zeiteingaben
// ======================
// Sollzeit
const sollZeitGesamt = document.getElementById("sollZeitGesamt");

// Pause am Vormittag
const vmPauseStart = document.getElementById("vmPauseStart");
const vmPauseEnde = document.getElementById("vmPauseEnde");

// Mittagspause
const mittagsPauseStart = document.getElementById("mittagsPauseStart");
const mittagsPauseEnde = document.getElementById("mittagsPauseEnde");

// Pause am Nachmittag
const nmPauseStart = document.getElementById("nmPauseStart");
const nmPauseEnde = document.getElementById("nmPauseEnde");

let arbeitstagEnde;

// Eventlistener
vmPauseStart.addEventListener("input", berechnungVmPause);
vmPauseEnde.addEventListener("input", berechnungVmPause);
mittagsPauseStart.addEventListener("input", berechnungMittagsPause);
mittagsPauseEnde.addEventListener("input", berechnungMittagsPause);
nmPauseStart.addEventListener("input", berechnungNmPause);
nmPauseEnde.addEventListener("input", berechnungNmPause);

// ======================
// Berechnung
// ======================

// Hilfsfunktion
function timeToMinutes(input) {
  const [h, m] = input.value.split(":").map(Number);
  return h * 60 + m;
}

// VM Pause
function berechnungVmPause() {
  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!vmPauseStart.value || !vmPauseEnde.value) {
    document.getElementById("vmErgebnis").textContent = "0";
    return;
  }

  const start = timeToMinutes(vmPauseStart);
  const ende = timeToMinutes(vmPauseEnde);

  const vmGesamt = ende - start;

  document.getElementById("vmErgebnis").textContent = vmGesamt;
}

// mittag
function berechnungMittagsPause() {
  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!mittagsPauseStart.value || !mittagsPauseEnde.value) {
    document.getElementById("mittagsErgebnis").textContent = "0";
    return;
  }

  const start = timeToMinutes(mittagsPauseStart);
  const ende = timeToMinutes(mittagsPauseEnde);

  const mittagsGesamt = ende - start;

  document.getElementById("mittagsErgebnis").textContent = mittagsGesamt;
}

// NM Pause
function berechnungNmPause() {
  // Wenn eins leer ist → nichts anzeigen, ohne den if abgleich würde bei nur einer Zahl NaN kommen
  if (!nmPauseStart.value || !nmPauseEnde.value) {
    document.getElementById("nmErgebnis").textContent = "0";
    return;
  }

  const start = timeToMinutes(nmPauseStart);
  const ende = timeToMinutes(nmPauseEnde);

  const nmGesamt = ende - start;

  document.getElementById("nmErgebnis").textContent = nmGesamt;
}

// Feierabend
function berechnungFeierabend () {
  const feierabend = ((vmErgebnis + mittagsErgebnis + nmErgebnis) - arbeitszeitGesamt);
// Zeit wieder in Stunden und Minuten umrechnen
  document.getElementById("feierabend").textContent = feierabend;
}