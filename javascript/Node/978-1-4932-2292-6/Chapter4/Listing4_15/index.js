setTimeout(() => {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
queueMicrotask(() => {
  console.log('queueMicrotask');
});
process.nextTick(() => {
  console.log('nextTick');
});

// Output:
// nextTick
// Promise
// queueMicrotask
// setTimeout
