const wc = require('./word-count');
const sentence = 'where there is a lot of light there is also a lot of shadow.';
const wordCount = wc(sentence);
console.log(sentence);
for (let i in wordCount) {
  console.log(wordCount[i] + ' x ' + i);
}
