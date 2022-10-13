highOrderFunc(()=>{
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
});

// heres another version of a high order function

const highOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
}

highOrderFunc(anotherFunc);