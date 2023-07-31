const person = {
  name: 'Lisa',
  age: 32,
};

const { name, age } = person;

console.log('Name: ', name); // Output: Name: Lisa
console.log('Age: ', age); // Output: Age: 32

const person2 = ['Klaus', 17];
const [name2, age2] = person2;

console.log('Name: ', name2); // Output: Name: Klaus
console.log('Age: ', age2); // Output: Age: 17
