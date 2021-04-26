const express = require('express');
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

const publicDir = __dirname + '/translations';

app.use(cors());

app.get('/', (req, res) => {
  const langs = [];

  fs.readdirSync(publicDir).forEach(fileName => {
    const matches = /^(.*)\.json?/.exec(fileName);
    matches[1] && langs.push(matches[1]);
  })

  const body = JSON.stringify(langs);

  console.log(`Serving data ${body}`);

  res.header('Content-Type', 'application/json');
  res.send(body);
});

app.get('/:lang', (req, res) => {
  const filePath = publicDir + '/' + req.params.lang  + '.json';
  const contents = fs.readFileSync(filePath, 'utf8');

  console.log(`Serving file ${filePath}`);

  res.header('Content-Type', 'application/json');
  res.send(contents);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
