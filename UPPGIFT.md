Övningsuppgift – Buggjakt: Att göra-lista

Den här att göra-appen är full av buggar. Hitta och rätta felen i script.js. HTML och CSS är redan rätt.

Öppna index.html i webbläsaren och rätta en bugg i taget. Ladda om sidan och testa efter varje ändring. Tips: använd console.log() och Console i DevTools (F12).

Buggarna

1. När man lägger till ett ärende står det [object HTMLInputElement] i listan i stället för texten man skrev.
2. Textfältet töms inte efter att ett ärende har lagts till.
3. Det går att lägga till tomma ärenden. Då ska ett felmeddelande visas i stället.
4. Listan ska ha max 5 ärenden, men det går att lägga till 6.
5. Klickar man på Radera tas alltid det första ärendet bort, inte det man klickade på.
6. Räknaren “Antal ärenden” uppdateras inte när man raderar ett ärende.
7. När man klickar på ett ärende ska det bli överstruket, men ingenting händer.
8. “Rensa alla” tar bort själva knappen i stället för att tömma listan.

Klar? Testa hela appen från början. Fungerar allt som det ska är du klar!


Ledtrådar för respektive bugg:
1. Vad är skillnaden mellan själva input-elementet och det användaren har skrivit i det?
2. Titta noga på raden som ska tömma fältet. Är det en tilldelning eller en jämförelse?
3. Vad innehåller text när fältet är tomt? Kom ihåg att trim() redan har tagit bort mellanslagen.
4. Hur många ärenden finns i listan när kontrollen körs? Ska det vara > eller något annat?
5. Vilket element tar koden bort? Det finns redan en variabel som pekar på just det ärendet.
6. Jämför vad som händer när man lägger till ett ärende med vad som händer när man raderar. Vad saknas?
7. Jämför klassnamnet i JavaScript med klassnamnet i style.css.
8. Vilket element anropas remove() på? Vilket element är det egentligen som ska tömmas?