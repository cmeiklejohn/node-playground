var http = require('http');

var opts = {
  host: 'www.google.com', 
  port: 80, 
  path: '/'
};

var request = http.get(opts, function(response) { 
  console.log(response);
  response.on('data', function(data) { 
    console.log(data);
  });
});

request.end();
