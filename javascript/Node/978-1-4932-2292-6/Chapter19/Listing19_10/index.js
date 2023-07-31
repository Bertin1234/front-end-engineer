import { open } from 'fs';
open('/does-not-exist.txt', 'r', (err, handle) => {
  if (err) throw err;
});
