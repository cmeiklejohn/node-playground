var express = require('express');

var app = express.createServer();

app.get('/', function(request, response) { 
  response.send("hello world");
});

app.listen(5000);
