var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({	'postCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'postCreateDate' : Date,	'postUpdateDate' : Date,	'postMediaType' : String,	'postMediaSource' : {		type : Schema.Types.ObjectId,		ref : 'Photo'	},	'postContent' : String,	'postLocation' : {		type : Schema.Types.ObjectId,		ref : 'Location'	},	'postComment' : {		type : Schema.Types.ObjectId,		ref : 'Comment'	},	'postLike' : Number});

module.exports = mongoose.model('Post', PostSchema);
