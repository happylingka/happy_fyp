var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AlbumSchema = new Schema({	'albumName' : String,	'albumCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'albumCreateTime' : Date,	'albumLocation' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Location'	}});

module.exports = mongoose.model('Album', AlbumSchema);
