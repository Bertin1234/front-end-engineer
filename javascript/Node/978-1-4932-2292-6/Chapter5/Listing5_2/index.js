import { createServer } from 'http';

createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  const responseBody = `<!DOCTYPE html>
    <html>
      <head>
        <title>Address Book</title>
      </head>
      <body>
        <h1>Address Book</h1>
      </body>
    </html>`;
  response.end(responseBody);
}).listen(8080, () => {
  console.log('Address Book available via http://localhost:8080');
});
