const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num =>{
    return num < 10;
});

const greaterThan1000 = jumbledNums.findIndex(num =>{
    return num > 1000;
});

console.log(jumbledNums);
console.log(jumbledNums[3]);
console.log(lessThanTen);
console.log(greaterThan1000);