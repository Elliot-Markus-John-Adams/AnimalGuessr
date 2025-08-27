# AnimalGuessr 🎨🐾

Ein lustiges Zeichnen-und-Raten-Spiel für 2 Spieler! Ein Spieler zeichnet ein Tier, während der andere versucht zu erraten, welches Tier es ist.

## 🎮 Spielanleitung

1. **Spieler-Setup**: Gebt eure Namen ein und startet das Spiel
2. **Runden**: Das Spiel hat 6 Runden, Spieler wechseln sich mit Zeichnen und Raten ab
3. **Zeichnen**: Der Zeichner sieht das Tier und hat 60 Sekunden Zeit zum Zeichnen
4. **Raten**: Der Rater versucht das Tier zu erraten
5. **Punkte**: Je schneller geraten wird, desto mehr Punkte gibt es für beide Spieler!

## 🚀 Installation & Start

### Option 1: Python HTTP Server
```bash
# Clone the repository
git clone https://github.com/yourusername/animalguessr.git
cd animalguessr

# Start with Python 3
python3 -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Start the server
http-server -p 8000
```

### Option 3: Live Server (VS Code)
1. Installiere die "Live Server" Extension in VS Code
2. Rechtsklick auf `index.html`
3. Wähle "Open with Live Server"

Nach dem Start öffne: **http://localhost:8000**

## 🎯 Features

- 🎨 2-Spieler-Modus
- ⏱️ 60-Sekunden-Timer
- 📊 Automatisches Punkte-System
- 🏆 Gewinner-Anzeige nach 6 Runden
- 📱 Responsive Design (iOS-Style)
- 🦁 Über 200 verschiedene Tiere

## 🛠️ Technologien

- HTML5
- CSS3 (iOS Design System)
- Vanilla JavaScript
- Keine externen Dependencies

## 📂 Dateistruktur

```
animalguessr/
├── index.html      # Haupt-HTML-Datei
├── style.css       # Styling (iOS-inspiriert)
├── script.js       # Spiel-Logik
└── README.md       # Diese Datei
```

## 🎨 Punktesystem

- **50-60 Sekunden**: 10 Punkte (Rater), 5 Punkte (Zeichner)
- **40-50 Sekunden**: 20 Punkte (Rater), 10 Punkte (Zeichner)
- **30-40 Sekunden**: 30 Punkte (Rater), 15 Punkte (Zeichner)
- **20-30 Sekunden**: 40 Punkte (Rater), 20 Punkte (Zeichner)
- **10-20 Sekunden**: 50 Punkte (Rater), 25 Punkte (Zeichner)
- **0-10 Sekunden**: 60 Punkte (Rater), 30 Punkte (Zeichner)

## 📱 Browser-Kompatibilität

- ✅ Chrome
- ✅ Safari
- ✅ Firefox
- ✅ Edge

## 🤝 Beitragen

Pull Requests sind willkommen! Für größere Änderungen bitte erst ein Issue erstellen.

## 📄 Lizenz

MIT

---

Viel Spaß beim Spielen! 🎮✨