var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  'userLastName': String,
  'userFirstName': String,
  'userRegisterDate': Date,
  'userAccountName': String,
  'userPassword': String,
  'userDateOfBirth': String,
  'userGender': String,
  'userLocation' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Location'
	},
'userBookmarked' : Array
}

  //location, online status
});

module.exports = mongoose.model('User', UserSchema);
