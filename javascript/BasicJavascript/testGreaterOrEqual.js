function testGreaterOrEqual(val){
    if(val >= 20){
        return "20 or over";
    }
    if(val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}

const tgoe = testGreaterOrEqual(10);
console.log(tgoe);