var http = require('http');

var options = { 
  host: 'www.google.com', 
  port: 80,
  path: '/q=thing',
  method: 'POST'
};

var request = http.request(options, function(response) { 
  response.setEncoding('utf8');
  response.on('data', function(chunk) { 
    console.log('BODY: ' + chunk);
  });
});

request.write("thing");
request.end();
