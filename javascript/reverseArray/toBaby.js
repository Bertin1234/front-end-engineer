const convertToBaby = arr => {
    const babyArray = [];
    for (const element of arr) {
          babyArray.push('baby ' + element);
    }
    return babyArray
}

/*
// As a function declaration:
function convertToBaby(arr) {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}
*/ 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 