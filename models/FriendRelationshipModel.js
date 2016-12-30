var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FriendRelationshipSchema = new Schema({	'friendRequester' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'friendReceiver' : {	type: Schema.Types.ObjectId,	ref: 'User'},	'friendRelationshipCreateTime' : Date,	'friendType' : String});

module.exports = mongoose.model('FriendRelationship', FriendRelationshipSchema);
