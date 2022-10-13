const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 100);

console.log(summedNums);