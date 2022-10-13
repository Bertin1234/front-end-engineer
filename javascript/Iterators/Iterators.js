const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

const randomNums = [1, 123, 25, 90, 3543, 42];

const foundElement = randomNums.findIndex(num => num > 200);

console.log(foundElement);

let cb = (n1, n2) => {return n1 + n2};
 
let hof = (func) => {
  let value = func(2,4);
  return `this function returned ${value}`;
}

let badWordIndex = storyWords.findIndex((word)=>{
  return word === badWord;
});

console.log(badWordIndex);

storyWords[78] = 'really'

storyWords.forEach((word) =>{
  word.length > 10 && console.log(word);
});

 
hof(cb);