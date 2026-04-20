// ======================
// Zeiteingaben
// ======================
// Sollzeit
const sollZeitGesamt = document.getElementById("sollZeitGesamt");

// Pause am Vormittag
const vmPauseStart = document.getElementById("vmPauseStart");
const vmPauseEnde = document.getElementById("vmPauseEnde");

// const vmPauseStart = "09:30";
// const vmPauseEnde = "10:00";

// Mittagspause
const mittagsPauseStart = document.getElementById("mittagsPauseStart");
const mittagsPauseEnde = document.getElementById("mittagsPauseEnde");

// Pause am Nachmittag
const nmPauseStart = document.getElementById("nmPauseStart");
const nmPauseEnde = document.getElementById("nmPauseEnde");

// Button
// const vmPauseBerechnung = document.getElementById("vmPauseBerechnung");
// const mittagsPauseBerechnung = document.getElementById("mittagsPauseBerechnung");
// const nmPauseBerechnung = document.getElementById("nmPauseBerechnung");
// const arbeitstagBerechnung = document.getElementById("arbeitstagBerechnung");


let arbeitstagEnde;

// Hilfsfunktion
function timeToMinutes(input) {
  const [h, m] = input.value.split(":").map(Number);
  return h * 60 + m;
}

// ======================
// Berechnung
// ======================
function berechnungVmPause() {
  const start = timeToMinutes(vmPauseStart);
  const ende = timeToMinutes(vmPauseEnde);

  const vmGesamt = ende - start;
  console.log("VM:", vmGesamt);

  return vmGesamt;
}

// function berechneMittagsPause() {
//   const start = timeToMinutes(mittagsPauseStart);
//   const ende = timeToMinutes(mittagsPauseEnde);

//   const gesamt = ende - start;
//   console.log("Mittag:", gesamt);

//   return gesamt;
// }

// function berechneNmPause() {
//   const start = timeToMinutes(nmPauseStart);
//   const ende = timeToMinutes(nmPauseEnde);

//   const gesamt = ende - start;
//   console.log("NM:", gesamt);

//   return gesamt;
// }


// vmPauseBerechnung.addEventListener("click", berechnungVmPause);
// mittagsPauseBerechnung.addEventListener("click", berechneMittagsPause);
// nmPauseBerechnung.addEventListener("click", berechneNmPause);

// // GesamtBerechnung
// arbeitstagBerechnung.addEventListener("click", function () {
//   const vm = berechnungVmPause();
//   const mittag = berechneMittagsPause();
//   const nm = berechneNmPause();

//   console.log("GESAMT:", vm + mittag + nm);
// });




// ======================
// Zeitrad
// ======================
// function createWheel(element, max) {
//   for (let i = 0; i < max; i++) {
//     let div = document.createElement("div");
//     div.className = "item";
//     div.textContent = i.toString().padStart(2, "0");
//     element.appendChild(div);
//   }
// }

// createWheel(document.getElementById("hours"), 24);
// createWheel(document.getElementById("minutes"), 60);

