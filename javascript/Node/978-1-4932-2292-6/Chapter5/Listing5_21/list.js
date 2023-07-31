export function getList(addresses) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>Address Book</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Address Book</h1>
        <table>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>delete</td>
            <td>delete</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
      </body>
    </html>`;
}

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">delete</a></td>
  </tr>`;
}
