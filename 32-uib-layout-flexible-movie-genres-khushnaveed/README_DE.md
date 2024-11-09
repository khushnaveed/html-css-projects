# Flexible Filmgenres

Mit dieser Übung zeigen wir, wie du ein flexibles Layout für eine Liste von Kategorien (in diesem Fall Filmgenres) erstellen kannst.

## Aufgaben

### Aufgabe 1

Ändere die Datei [index.html](/index.html) und;

- Erstelle ein HTML-Element mit der Klasse `genres`
- Erstelle darin 6 untergeordnete HTML-Elemente mit den folgenden Texten und Hintergrundfarben. Sie sollten in der folgenden Reihenfolge erstellt werden:
  - Action → `rgb(30, 144, 255)`
  - Thriller → `rgb(190, 178, 178)`
  - Comedy → `rgb(255, 214, 30)`
  - Horror → `rgb(0, 0, 0)`
  - Drama → `rgb(169, 169, 169)`
  - Romance → `rgb(255, 0, 0)`
- Gib jedem Genre seine eigene CSS-Klasse, zum Beispiel für "Action" füge die Klasse `action` hinzu

### Aufgabe 2

Ändere die Datei [style.css](/style.css), um die folgenden CSS-Effekte anzuwenden;

- Mache `.genres` zu einem Flex-Container
- Jedes Flex-Item sollte eine Basisbreite von `200px` und eine feste Höhe von `100px` haben
- Standardmäßig sollte jedes Flex-Item den gesamten verfügbaren Platz einnehmen
- Der Text sollte für jedes Flex-Item zentriert sein
- Der Abschnitt `romance` sollte dreimal so viel Platz einnehmen wie die anderen Abschnitte
- Der Abschnitt `comedy` sollte sechsmal so viel Platz wie die anderen Abschnitte einnehmen

> **Tipp**: Überlege, `flex-wrap` zu verwenden, um die letzten beiden Punkte zu erreichen

## Referenzbild

![Referenzbild](/reference.gif)
