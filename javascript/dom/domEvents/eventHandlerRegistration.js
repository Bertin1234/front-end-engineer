// event handler Registration

let eventTarget = document.getElementById('targetElement');

eventTarget.addEventListener('click', function() {
    // this block of code will run when click event happens on eventTarget
});

function eventHandlerFunction(){
    // This block of code will run when the click event happens
}

eventTarget.addEventListener('click', eventHandlerFunction);

// Event handler registration example

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:

function showInfo(){
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click', showInfo());