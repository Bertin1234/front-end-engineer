
class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }   
   
    incrementBehavior() {
      this._behavior++;
    }

    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
      }

  } 

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
      }
  }

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce