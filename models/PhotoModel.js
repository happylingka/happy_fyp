var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PhotoSchema = new Schema({

module.exports = mongoose.model('Photo', PhotoSchema);