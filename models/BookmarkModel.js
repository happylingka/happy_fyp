var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookmarkSchema = new Schema({	'bookmarkCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'bookmarkLocation' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Location'	}});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
