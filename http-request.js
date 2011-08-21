var http = require('http');

var opts = {
  host: 'www.google.com', 
  port: 80, 
  path: '/',
  method: 'GET'
};

var request = http.request(opts, function(response) { 
  console.log(response);
  response.on('data', function(data) { 
    console.log(data);
  });
});

request.end();
