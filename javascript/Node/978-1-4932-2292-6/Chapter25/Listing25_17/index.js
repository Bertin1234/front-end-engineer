import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Express!');
});

app.listen(8080);
