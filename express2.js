var express = require('express');

var app = express.createServer();

app.configure(function() { 
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', 'production', function() { 
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() { 
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
});

app.configure('production', function() { 
  app.use(express.errorHandler());
});

app.get('/', function(request, response) { 
  response.send("hello world");
});

app.get('/user/:id', function(request, response) { 
  response.send('user' + request.params.id);
});

app.listen(5000);
