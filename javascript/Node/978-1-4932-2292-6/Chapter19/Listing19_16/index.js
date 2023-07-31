import { stat } from 'fs';

stat('input.txt', (err, stat) => {
  console.log(`User: ${stat.uid}`);
  console.log(`Group: ${stat.gid}`);
  console.log(`Permissions: ${stat.mode.toString(8)}`);
});
