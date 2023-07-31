let age: number | string;

age = 42; // ok
age = '42'; // ok
age = true; // error

if (age.isInteger()) {
}
// error, isInteger exists only for type number

const items: (number | string)[] = [];

items.push(1); // ok
items.push('Hello'); // ok
items.push(true); // error
