var express = require('express'); 

var app = express.createServer();

module.exports = app;

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.logger());
  app.use(app.router);
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

app.get('/', function(request, response) { 
  response.render('index');
});

if (!module.parent) {
  app.listen(5000);
  console.log("Server running on port %d", app.address().port);
}
