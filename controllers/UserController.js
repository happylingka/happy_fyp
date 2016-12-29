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
  },
  getBy: function(req, res) {
    UserModel.find({_id: req.body.uid}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  getAll: function(req, res) {
    UserModel.find(function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  editUserInfo: function(req, res){
    UserModel.findOne({_id: req.body.id}, function(err, user) {
      if (err) res.json({Error: err});
      if (!user) {res.json({Success: "No such user"})};
      if (user) {
        user.userLastName = req.body.userLastName ? req.body.userLastName : user.userLastName;
        user.userFirstName = req.body.userFirstName ? req.body.userFirstName : user.userFirstName;
        user.userAccountName = req.body.userAccountName ? req.body.userAccountName : user.userAccountName;
        user.userPassword = req.body.userPassword ? req.body.userPassword : user.userPassword;
        user.userDateOfBirth = req.body.userDateOfBirth ? req.body.userDateOfBirth : user.userDateOfBirth;
        user.userGender = req.body.userGender ? req.body.userGender : user.userGender;

        user.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });
  },
  updateUserLocation: function(req, res){
    UserModel.findOne({_id: req.body.id}, function(err, user) {
      if (err) res.json({Error: err});
      if (!user) {res.json({Success: "No such user"})};
      if (user) {
        user.userLocation = req.body.userLocation;
        user.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });
  }
}
