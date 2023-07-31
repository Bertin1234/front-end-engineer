import { createReadStream } from 'fs';

const options = {
  encoding: 'utf8',
};

const readStream = createReadStream('does-not-exist.txt', options);

readStream.on('readable', () => {
  const data = readStream.read();
  if (data) {
    console.log(data);
  }
});

readStream.on('close', () => {
  console.log('Stream was closed');
});

readStream.on('error', (e) => {
  console.error('An error occurred: ', e);
});
