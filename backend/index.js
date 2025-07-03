require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());


app.get('/jokes', (req, res) => {
  const fruits = [
    {
      id : 1,
      title : 'fruit 1',
      Content : 'Apple'
    },
    {
      id : 2,
      title: 'fruit 2',
      Content: 'Mango'
    }
  ]
  
  res.send(fruits);
});

app.get('/about', (req, res) => {
  res.send('Hello bhai!!');
});

app.listen(port, () => {
  // ✅ Use backticks, not single quotes
  console.log(`Example app listening on port http://localhost:${port}`);
});


// console.log('hello world');