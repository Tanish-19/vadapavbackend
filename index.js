require('dotenv').config();

const express = require('express');
const app = express();

const port = 3000;

console.log('From ENV:', process.env.PORT); // Confirming the port is loaded

app.get('/home', (req, res) => {
  res.send('Hello world!!');
});

app.get('/about', (req, res) => {
  res.send('Hello bhai!!');
});

app.listen(port, () => {
  // ✅ Use backticks, not single quotes
  console.log(`Example app listening on port ${port}`);
});


// console.log('hello world');