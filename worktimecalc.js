// TODO
// - [ ] Die Zeiten brauchen einen standartwert der bei null liegen soll

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

let arbeitstagEnde;

// ======================
// Berechnung
// ======================
// vmPause
const vmPausenStartStundenInMinuten = Number(vmPauseStart.split (":") [0]); // Zeit in Minuten umrechnen
const vmPausenStartMinuten = Number(vmPauseStart.split (":") [1]); // Minuten und Stunden zusammenzählen
const vmPauseStartInMinuten = ((vmPausenStartStundenInMinuten * 60) + vmPausenStartMinuten);

const vmPausenEndeStundenInMinuten = Number(vmPauseEnde.split (":") [0]); // Zeit in Minuten umrechnen
const vmPausenEndeMinuten = Number(vmPauseEnde.split (":") [1]); // Minuten und Stunden zusammenzählen
const vmPauseEndeInMinuten = ((vmPausenEndeStundenInMinuten * 60) + vmPausenEndeMinuten);

// Pause in Minuten Berechnen
const vmPauseGesamt = (vmPauseEndeInMinuten - vmPauseStartInMinuten);
console.log (vmPauseGesamt);


// mittagsPause
const mittagsPauseStartStundenInMinuten = Number(mittagsPauseStart.split (":") [0]); // Zeit in Minuten umrechnen
const mittagsPauseStartMinuten = Number(mittagsPauseStart.split (":") [1]); // Minuten und Stunden zusammenzählen
const mittagsPauseStartInMinuten = ((mittagsPauseStartStundenInMinuten * 60) + mittagsPauseStartMinuten);

const mittagsPauseEndeStundenInMinuten = Number(vmPauseEnde.split (":") [0]); // Zeit in Minuten umrechnen
const mittagsPauseEndeMinuten = Number(mittagsPauseEnde.split (":") [1]); // Minuten und Stunden zusammenzählen
const mittagsPauseEndeInMinuten = ((mittagsPauseEndeStundenInMinuten * 60) + mittagsPauseEndeMinuten);

// Pause in Minuten Berechnen
const mittagsPauseGesamt = (mittagsPauseEndeInMinuten - mittagsPauseStartInMinuten);
console.log (mittagsPauseGesamt);


// nmPause
const nmPausenStartStundenInMinuten = Number(nmPauseStart.split (":") [0]); // Zeit in Minuten umrechnen
const nmPausenStartMinuten = Number(nmPauseStart.split (":") [1]); // Minuten und Stunden zusammenzählen
const nmPauseStartInMinuten = ((nmPausenStartStundenInMinuten * 60) + nmPausenStartMinuten);

const nmPausenEndeStundenInMinuten = Number(nmPauseEnde.split (":") [0]); // Zeit in Minuten umrechnen
const nmPausenEndeMinuten = Number(nmPauseEnde.split (":") [1]); // Minuten und Stunden zusammenzählen
const nmPauseEndeInMinuten = ((nmPausenEndeStundenInMinuten * 60) + nmPausenEndeMinuten);

// Pause in Minuten Berechnen
const nmPauseGesamt = (nmPauseEndeInMinuten - nmPauseStartInMinuten);
console.log (nmPauseGesamt);






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
