// Scope Hoisting Closures
// Scope: Where we have access to variables.
// Global Scope
// const firstName = 'John';
// // Local Scope / Function Scope
// const logName = () =>{
//     let firstName = 'Jane';
//     console.log(firstName);
// }
// const logName2 = () => {
//     console.log(firstName);
// }
// logName();
// logName2();
// block scope
// if(true){
//     const firstName = 'John';
// }
// console.log(firstName);

// Hoisting; almost never used in javascript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// console.log(age);
// var age = 20
// hoist();
// function hoist(){
//     var message = 'test';
//     console.log(message);
// }
// const age = 25;
// console.log(age);

// Closures in javascript
const outer = () =>{
    const outerVar = 'Hello';
    const inner = () =>{
        const innerVar = 'Hi';
        console.log(outerVar, innerVar)
    }
    return inner;
}

const innerFn = outer();
innerFn();

const init = () =>{
    const hobby = 'Learning JavaScript';

    const displayHobby = () =>{ // displayHobby is the inner function
        console.log(hobby); // using a variable created in the parent function
    }
    return displayHobby;
}

const myFunc = init();

myFunc();



