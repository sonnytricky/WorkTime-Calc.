Du bist schon ziemlich nah dran 👍 – dir fehlt im Grunde nur eine **Persistenz-Lösung im Browser**. Für deinen Use Case ist **`localStorage`** perfekt: simpel, schnell und ohne Backend.

Ich zeig dir direkt, wie du das sauber einbaust.

---

## 🔧 1. Daten speichern

Erstelle eine Funktion, die **alle Eingaben speichert**:

```js
function saveData() {
  const data = {
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
```

---

## 🔄 2. Daten laden (beim Start der Seite)

```js
function loadData() {
  const saved = localStorage.getItem("arbeitszeitData");
  if (!saved) return;

  const data = JSON.parse(saved);

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
```

---

## ⚡ 3. Automatisch speichern bei Eingaben

Füge einfach überall `saveData` hinzu:

```js
vmPauseStart.addEventListener("input", () => {
  berechnungVmPause();
  saveData();
});

vmPauseEnde.addEventListener("input", () => {
  berechnungVmPause();
  saveData();
});

// gleiches für alle anderen Felder
```

Oder kürzer:

```js
[
  startArbeitstag,
  vmPauseStart, vmPauseEnde,
  mittagsPauseStart, mittagsPauseEnde,
  nmPauseStart, nmPauseEnde
].forEach(el => {
  el.addEventListener("input", saveData);
});
```

---

## 🚀 4. Beim Laden der Seite aufrufen

Ganz unten in deinem Script:

```js
loadData();
```

---

## 🧠 Bonus (optional aber sinnvoll)

### Reset-Button:

```js
function clearData() {
  localStorage.removeItem("arbeitszeitData");
  location.reload();
}
```

---

## ⚠️ Kleiner Bug in deinem Code

Das hier ist falsch:

```js
document.querySelector("feierabendBtn")
```

➡️ sollte wahrscheinlich sein:

```js
document.querySelector("#feierabendBtn")
```

(sonst findet er dein Element nicht)

---

## Ergebnis

Danach:

* Seite neu laden → Werte bleiben ✅
* Änderungen → automatisch gespeichert ✅
* Kein Backend nötig ✅

---

Wenn du willst, kann ich dir noch zeigen:

* wie du **Sollzeit speicherst**
* oder das Ganze als **App (PWA)** machst (wie eine echte Handy-App)

Sag einfach 👍
