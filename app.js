var express = require('express');
var app = express();

var aboutroutes = require("./routes/about")

app.use('/api', aboutroutes)

app.get('/', function (req, res) {
  console.log('navigated to the home page')
  res.send('Hello World!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});