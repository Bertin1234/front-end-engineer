// Create and insert Elements
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
document.body.appendChild(paragraph);

// Example of creating an emement
let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.getElementById('italy-attractions').appendChild(newAttraction);