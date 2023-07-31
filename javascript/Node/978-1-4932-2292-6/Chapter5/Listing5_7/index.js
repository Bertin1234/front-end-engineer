const myObj = {
  myMethod() {
    setTimeout(() => {
      console.log(this); // Output: { myMethod: [Function: myMethod] }
    });
  },
};

myObj.myMethod();
