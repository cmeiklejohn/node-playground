var mongoose = require('mongoose');
var db       = mongoose.connect('mongodb://localhost:27017/example-app');
var Schema   = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var User = new Schema({ 
  id: ObjectId,
  username: { 
    type: String,
    index: true,
    validate: [ function(o) { return u.length > 0 }, 'username is required.'],
  }
});

mongoose.model('User', User);
module.exports = db.model('User');
