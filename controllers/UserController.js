var UserModel = require('../models/UserModel.js');

module.exports = {
  create: function(req, res) {
    var User = new UserModel({
      'userLastName': req.body.userLastName ? req.body.userLastName : '',
      'userFirstName': req.body.userFirstName ? req.body.userFirstName : '',
      'userRegisterDate': new Date(),
      'userAccountName': req.body.userAccountName,
      'userPassword': req.body.userPassword,
      'userDateOfBirth': req.body.userDateOfBirth ? req.body.userDateOfBirth : '',
      'userGender': req.body.userGender ? req.body.userGender : '',
    });

    User.save(function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  }
}
