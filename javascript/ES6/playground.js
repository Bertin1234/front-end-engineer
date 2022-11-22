function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

  const arr = [6, 89, 3, 45];
  const maximus = Math.max(...arr);
  console.log(maximus);

  const user = {name: 'John Doe', age: 34};
  const name = user.name;
  const age = user.age;
  console.log();

  const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c);