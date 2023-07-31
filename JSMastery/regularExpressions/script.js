// Regular Expressions
// const text = "mom and dad and baby.";
// const pattern = /mom( and dad( and baby)?)?/gi;
// console.log(pattern);
// const matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches.input);
// console.log(matches[0]);
// console.log(matches[1]);
// console.log(matches[2]);
// let text2 = "cat, bat, sat, fat";
// let pattern2 = /.at/;
// let matches2 = pattern2.exec(text2);
// console.log(matches2.index);
// console.log(matches2[0]);
// console.log(pattern2.lastIndex);
// matches2 = pattern2.exec(text2);
// console.log(matches2.index);
// console.log(matches2[0]);
// console.log(pattern2.lastIndex);
// let text = "cat, bat, sat, fat";
// let pattern = /.at/g;
// let matches = pattern.exec(text);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(pattern.lastIndex)
let text = "cat, bat, sat, fat";
let pattern = /.at/y;

let matches = pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

