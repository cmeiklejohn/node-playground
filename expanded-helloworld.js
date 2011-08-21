var http = require('http');
var server = http.createServer();
var handleRequest = function(request, response) { 
  response.writeHead(200, {});
  response.end('Hello World');
};

server.on('request', handleRequest);
server.listen(8125);

console.log("Server running on http://localhost:8125");
