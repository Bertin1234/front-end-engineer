// addClickInteractivity
let element = document.querySelector('button');

element.onclick = function(){
    element.style.backgroundColor = 'blue';
}

// assign onclick property to function by name.
let element = document.querySelector('button');

function turnBlue(){
    element.style.backgroundColor = 'blue';
}

element.onclick = turnBlue;

// using the dom to turn the button red
let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;