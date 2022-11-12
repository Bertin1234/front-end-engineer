// Setup
function testStrictNotEqual(val){
    if(val !== 17){
        return "Not Equal";
    }
    return "Equal";
}

const sne = testStrictNotEqual(10);
console.log(sne);