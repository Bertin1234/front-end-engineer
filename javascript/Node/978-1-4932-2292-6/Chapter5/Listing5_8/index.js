import { createServer } from 'http';

const addresses = [
  {
    id: 1,
    firstname: 'James',
    lastname: 'Bond',
    street: '12 Millbank',
    city: 'London',
    country: 'Great Britain',
  },
  {
    id: 2,
    firstname: 'Sherlock',
    lastname: 'Holmes',
    street: '221b Baker St',
    city: 'London',
    country: 'Great Britain',
  },
];

createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  const responseBody = `<!DOCTYPE html>
    <html>
      <head>
        <title>Address Book</title>
      </head>
      <body>
        <h1>Address Book</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
          </thead>
          <tbody>
            ${addresses.map(createRow).join('')}
          </tbody>
        </table>
      </body>
    </html>`;
  response.end(responseBody);
}).listen(8080, () =>
  console.log('Address Book available via http://localhost:8080')
);

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
  </tr>`;
}
