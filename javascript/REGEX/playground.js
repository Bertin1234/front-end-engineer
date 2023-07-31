/*let now = new Date();
console.log(now);

let y2k = new Date(2000, 0);
let start = Date.now();
let stop = Date.now(); 
let result = start - stop;
let allFives = new Date(2005, 4, 5, 17, 55, 55);
let date1 = new Date(2019, 0, 1); //"January 1, 2019"
let date2 = new Date(2019, 1, 1); //"February 1, 2019"
let showDates1 = console.log(date1 < date2); //true
let showDates2 = console.log(date1 > date2); //false
showDates1;
showDates2;
console.log(y2k);
console.log(allFives);
console.log(result);

let humStr = "I'll hum a song.";
let hugStr = "Bear hug";
let huRegex = /hu./;
const showtime = huRegex.test(humStr);
huRegex.test(hugStr);
console.log(showtime);

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
let strBig = bigStr.match(bgRegex);
let strBag = bagStr.match(bgRegex);
let strBug = bugStr.match(bgRegex);
let strBog = bogStr.match(bgRegex);
console.log(strBig);
console.log(strBag);
console.log(strBug);
console.log(strBog);

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
console.log(jennyStr.match(myRegex));

let firstString = "Ricky is the first and cen be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
console.log(firstRegex.test(firstString));
console.log(firstRegex.test(notFirst));

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
console.log(storyRegex.test(theEnding))
console.log(storyRegex.test(noEnding));

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);*/

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

