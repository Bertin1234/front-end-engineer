// Remove an Element
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);

// If you want to hide things
document.getElementById('sign').hidden = true;

// a real example
let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);