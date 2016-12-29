var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentSchema = new Schema({	'commentCreator' : String,	'commentContent' : String,	'commentCreateTime' : Date});

module.exports = mongoose.model('Comment', CommentSchema);
