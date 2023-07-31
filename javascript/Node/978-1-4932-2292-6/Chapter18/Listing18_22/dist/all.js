const julia = new User('Julia', 'Müller');
const klaus = new User('Klaus', 'Petersen');

console.log(julia.greet());
console.log(klaus.greet());

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}
