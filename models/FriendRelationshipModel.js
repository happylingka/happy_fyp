var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var FriendRelationshipSchema = new Schema({

module.exports = mongoose.model('FriendRelationship', FriendRelationshipSchema);