var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentSchema = new Schema({	'commentCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'commentContent' : String,	'commentCreateTime' : Date,	'commentUpdateDate' : Date,	'commentPostId' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Post'	}	//likes ? need?});

module.exports = mongoose.model('Comment', CommentSchema);
