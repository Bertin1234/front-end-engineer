function testStrict(val){
    if(val = 11){
        return "Equal";
    }
    return "Not Equal";
}

const bergamer = testStrict(11);
console.log(bergamer);