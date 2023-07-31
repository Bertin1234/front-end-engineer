import { createWriteStream } from 'fs';

const writeStream = createWriteStream('/usr/sbin/test.txt');

writeStream.on('error', (err) => {
  console.error('An error occurred: ', err);
});
