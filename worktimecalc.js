// ======================
// Sachen vom HTML
// ======================


// ======================
// Zeiteingabe
// ======================
// Sollzeit
let sollZeit;

// Pause am Vormittag
let vmPause;

// Mittagspause
let mittagspause

// Pause am Nachmittag
let nmPause;

// ======================
// Berechnung
// ======================






// ======================
// Zeitrad
// ======================
function createWheel(element, max) {
  for (let i = 0; i < max; i++) {
    let div = document.createElement("div");
    div.className = "item";
    div.textContent = i.toString().padStart(2, "0");
    element.appendChild(div);
  }
}

createWheel(document.getElementById("hours"), 24);
createWheel(document.getElementById("minutes"), 60);
