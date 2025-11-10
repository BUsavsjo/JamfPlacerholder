# JAMF CSV Generator

Ett litet webbverktyg för att skapa CSV-filer som kan importeras i Jamf. Verktyget genererar de kolumner som ofta används för enheter och låter dig både ladda ner filen och kopiera innehållet till urklipp.

## Funktioner

- Klistra in en lista med serienummer och få varje rad validerad.
- Lägg till fält som `Identification`, `AssetTag`, `AssignToUser`, `MemberOfGroups`, `DeviceName` och `Location`.
- Automatisk numrering av `Identification` när flera serienummer anges.
- Förhandsgranskning i realtid samt möjlighet att ladda ner eller kopiera CSV-datan.

## Kom igång

1. Öppna `index.html` i din webbläsare.
2. Klistra in serienummer i textfältet (ett per rad).
3. Fyll i de fält som du behöver.
4. Kopiera resultatet till urklipp eller ladda ner CSV-filen.

## Projektstruktur

```
.
├── index.html        # Grundläggande HTML och styling
├── js
│   ├── csvGenerator.js  # Logik för att skapa CSV-data
│   ├── domElements.js   # Referenser till fält och hjälpfunktioner för DOM-hantering
│   ├── fileActions.js   # Hjälpfunktioner för nedladdning och urklipp
│   └── main.js          # Applikationens startpunkt som knyter ihop modulerna
└── README.md         # Denna fil
```

## Utveckling

- JavaScript-koden är uppdelad i moduler för att enklare kunna testa och återanvända funktioner.
- Inga externa beroenden används, så projektet kan köras genom att öppna HTML-filen direkt.
- Vill du utöka verktyget kan du t.ex. lägga till fler fält i `domElements.js` och justera logiken i `csvGenerator.js`.

## Licens

Projektet är ett exempel och saknar explicit licens. Lägg gärna till en licensfil innan vidare distribution.
