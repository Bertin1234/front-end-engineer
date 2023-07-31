const myObj = {
  myMethod() {
    setTimeout(function () {
      console.log(this); // Output: Timeout { ... }
    });
  },
};

myObj.myMethod();
