// Strings in greater detail
// In java script we use strings to store text.
// const greeting = `Hi I\'m John, but ppl call me \"Johnny\".`;
// console.log(greeting);

// String Length
// const name = 'John is a good fella';
// const firstLetter = name[0];
// const lastLetter = name[name.length - 1];
// console.log(firstLetter, lastLetter);

// String change Case UPPER/lower case.
// const mixedCaseString = `Hello! how are you`;
// const lowerCaseString = mixedCaseString.toLowerCase();
// const upperCaseString = mixedCaseString.toUpperCase();
// console.log(lowerCaseString);
// console.log(upperCaseString);

// Searching for a substring within a string.
// indexOf()
// const hobbies = `I love HTML, CSS and JavaScript, JavaScript.`;
// indexOf()
// const firstIndex = hobbies.indexOf('JavaScript');
// console.log(firstIndex);
// lastIndexOf()
// const lastIndex = hobbies.lastIndexOf('JavaScript');
// console.log(lastIndex);
// includes()***
// const includesIndex = hobbies.includes('JavaScript');
// console.log(includesIndex);
// startsWith()
// console.log(hobbies.startsWith(`I love`));
// endsWith()
// console.log(hobbies.endsWith(`JavaScript.`));
// Returns the position of the first occurrence of a substring.
// @param searchString — The substring to search for in the string
// @param position — The index at which to begin 
// searching the String object. 
// If omitted, search starts at the beginning of the string.

// Getting for a substring
// const exampleString = `hotdog`;
// slice();
// const dog = exampleString.slice(3, 6);
// console.log(dog);

// Split a String
// const exampleString = 'The quick brown fox jumps over the lazy dog.';
// split();
// const letters = exampleString.split(' ');
// console.log(letters);

// Revverse Repeat and Trim a String
const exampleString = `test`;
const str = exampleString.split('').reverse().join(''); //tset
console.log(str);


