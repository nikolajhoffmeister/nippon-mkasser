function changeColor(element) {
    // Fjern 'active' klassen fra alle cirkler
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.classList.remove('active');
    });
 
    // Tilføj 'active' klassen til den klikkede cirkel
    element.classList.add('active');
 }