// Setup
function testNotEqual(val){
    if(val != 99){
        return "Not Equal";
    }
    return "Equal";
}

const ne = testNotEqual(10);
console.log(ne);