var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookmarkSchema = new Schema({

module.exports = mongoose.model('Bookmark', BookmarkSchema);