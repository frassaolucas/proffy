import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Lucas', age: 29 },
    { name: 'Fernando', age: 54 }
  ]

  return response.send(users);
})

app.listen(3333);