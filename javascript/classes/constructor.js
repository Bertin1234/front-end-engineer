class Surgeon{
    constructor(name, department){
      this.name = name;
      this.department = department;
    }
  }

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
console.log(surgeonRomero.name);
console.log(surgeonRomero.department);

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonJackson.name);
console.log(surgeonJackson.department);