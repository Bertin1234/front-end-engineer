process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection'); // Output: unhandledRejection
  console.error(error); // Output: Whoops, an Error occured
});

function withPromise() {
  return Promise.reject('Whoops, an Error occured');
}

withPromise().then(() => {
  console.log('Promise resolved');
});
