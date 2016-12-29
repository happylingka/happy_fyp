var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PhotoSchema = new Schema({	'photoCreator' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'photoAlbum' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Album'	},	'photoCreateTime' : Date,	'photoLocation' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Location'	},	'photoSource' : String});

module.exports = mongoose.model('Photo', PhotoSchema);
