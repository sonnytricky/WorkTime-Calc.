const startArbeitstag = "08:00";  // Beginn Arbeitstag
const vmErgebnis = 15;            // Pause
const mittagsErgebnis = 60;       // Pause
const nmErgebnis = 15;            // Pause
let arbeitszeitGesamt = "08:30";  // Sollzeit

function timeToMinutes(input) {
  const value = typeof input === "string" ? input : input.value;

  // wenn leer → 0 Minuten
  if (!value) return 0;

  const [h, m] = value.split(":").map(Number);

  // Sicherheit falls irgendwas schief ist
  if (isNaN(h) || isNaN(m)) return 0;

  return h * 60 + m;
}

function berechnungFeierabend() {
  const arbeitstag = timeToMinutes(arbeitszeitGesamt);
  const arbeitstagStart = timeToMinutes(startArbeitstag);

  const gesamtZeit = arbeitstag + vmErgebnis + mittagsErgebnis + nmErgebnis;
  const gesamtArbeitstag = (arbeitstagStart + gesamtZeit);

  const hours = Math.floor(gesamtArbeitstag / 60);
  const minutes = gesamtArbeitstag % 60;

  const arbeitstagEnde =
    hours.toString().padStart(2, "0") + ":" +
    minutes.toString().padStart(2, "0");

  return arbeitstagEnde;
}

console.log(berechnungFeierabend());