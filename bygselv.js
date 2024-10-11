// Funktion til at gøre kun én knap aktiv i en gruppe
function selectButton(groupClass, button) {
   // Henter alle knapper i samme gruppe
   const buttons = document.querySelectorAll(`.${groupClass} button`);
   
   // Fjerner 'active'-klassen fra alle knapper i gruppen
   buttons.forEach(btn => btn.classList.remove('active'));
   
   // Tilføjer 'active'-klassen til den valgte knap
   button.classList.add('active');
}

// Event-listener til personvalg
document.querySelectorAll('.number-options button').forEach(button => {
   button.addEventListener('click', () => {
       selectButton('number-options', button);
   });
});

// Event-listener til måltidskassevalg
document.querySelectorAll('.meal-options button').forEach(button => {
   button.addEventListener('click', () => {
       selectButton('meal-options', button);
   });
});

// JavaScript for at vælge præference og allergi ikoner
document.querySelectorAll('.preference-options .icon-option').forEach(icon => {
   icon.addEventListener('click', function() {
       // Fjern 'active' klassen fra alle ikoner i præference sektionen
       document.querySelectorAll('.preference-options .icon-option').forEach(item => item.classList.remove('active'));
       
       // Tilføj 'active' klassen til det valgte ikon
       this.classList.add('active');
   });
});

document.querySelectorAll('.allergy-options .icon-option').forEach(icon => {
   icon.addEventListener('click', function() {
       // Fjern 'active' klassen fra alle ikoner i allergi sektionen
       document.querySelectorAll('.allergy-options .icon-option').forEach(item => item.classList.remove('active'));
       
       // Tilføj 'active' klassen til det valgte ikon
       this.classList.add('active');
   });
});