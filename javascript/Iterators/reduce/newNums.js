const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator,currentValue){
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);

const newSum2 = newNumbers.reduce((accumulator,currentValue)=>{
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
});

console.log(newSum);
console.log(newSum2);