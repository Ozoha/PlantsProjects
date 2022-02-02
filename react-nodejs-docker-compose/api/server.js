const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/samples', (req, res) => {
  console.log('api/samples called!')
  res.json(users);
});

app.post('/api/sample', (req, res) => {
  const user = req.body.user;
  console.log('Adding sample:::::', user);
  users.push(user);
  res.json("sample addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});