var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({	'postCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'postCreateDate' : Date,	'postUpdateDate' : Date,	'postMediaType' : String,	'postMediaSource' : {		type : Schema.Types.ObjectId,		ref : 'Photo'	},	'postContent' : String,	'postLocation' : {		type : Schema.Types.ObjectId,		ref : 'Location'	},	'postComment' : Array, //need?	'postLike' : [{		type : Schema.Types.ObjectId,		ref : 'User'	}] //array of objId});

module.exports = mongoose.model('Post', PostSchema);
