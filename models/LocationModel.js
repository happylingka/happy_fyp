var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var LocationSchema = new Schema({
 'locationName' : String,
 'locationStreet' : String,
 'locationCity' : String,
 'locationCountry' : String,
 'locationCoordinate' : Array

 //comment, rating
});

module.exports = mongoose.model('Location', LocationSchema);
