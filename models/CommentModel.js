var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentSchema = new Schema({	'commentCreator' : String,	'commentContent' : String,	'commentCreateTime' : Date,	'commentUpdateDate' : Date	//likes ? need?});

module.exports = mongoose.model('Comment', CommentSchema);
