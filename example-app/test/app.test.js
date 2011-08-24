var app = require('../app'),
    assert = require('assert');

module.exports = { 
  'Load the home page': function() { 
    assert.response(app, 
        { url: '/' }, 
        { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }},
        function(response) { 
          assert.includes(response.body, 'Welcome');
        });
  }
};
