// Select all elements with the class 'rectangle-div'
const rectangles = document.querySelectorAll('.rectangle-div');

// Add a click event listener to each rectangle
rectangles.forEach(rectangle => {
    rectangle.addEventListener('click', () => {
        // Toggle the background color between red and blue
        if (rectangle.style.backgroundColor === 'blue') {
            rectangle.style.backgroundColor = '#cf0300'; // Original color
        } else {
            rectangle.style.backgroundColor = 'blue';
        }
    });
});