// things that have to do with errorhandling
console.log(Error('Your password is too weak'));

// same thing but with the new keyword
console.log(new Error('Your password is too weak'));

// Error with the throw keyword.
throw Error('Something wrong happened');

console.log('This will never run');

// Error with a try...catch Statement
try {
    throw Error('This error will get caught');
  } catch (e) {
    console.log(e);
  }
  // Prints: This error will get caught
   
  console.log('The thrown error that was caught in the try...catch statement!');
  // Prints: 'The thrown error that was caught in the try...catch statement!'
