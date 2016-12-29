var FriendRelationshipModel = require('../models/FriendRelationshipModel.js');

module.exports = {
  friendRequest: function(req, res){
    if(req.body.friendRequester == req.body.friendReceiver) res.json({error: "friendRequester and friendReceiver cannot be same person"});
    FriendRelationshipModel.findOne({
      $or:[{
        friendRequester:req.body.friendRequester,
        friendReceiver:req.body.friendReceiver
      },{
          friendRequester:req.body.friendReceiver,
          friendReceiver:req.body.friendRequester
        }
      ]
    }, function(err, friendReq) {
      if (err) res.json({Error: err});
      if (friendReq) res.json({Success : "requested already"});
      if (!friendReq){
        var FriendRelationship = new FriendRelationshipModel({
          'friendRequester' : req.body.friendRequester,
          'friendReceiver' : req.body.friendReceiver,
          'friendRelationshipCreateTime' : new Date(),
          'friendType' : req.body.friendType ? req.body.friendType : 'Request'
        });
        FriendRelationship.save(function(err, obj){
          if (err) res.json({Error: err});
          if (obj) res.json({Success: obj});
        });
      }
    });
  },
  friendAccept: function(req, res){
    FriendRelationshipModel.findOne({
      friendRequester:req.body.friendRequester,
      friendReceiver:req.body.friendReceiver,
    }, function(err, friendReq) {
      if (err) res.json({Error: err});
      if (!friendReq) {res.json({Success: "No such Friend Request"})};
      if(friendReq.friendType == 'Request'){
        friendReq.friendType = 'Friend';
        friendReq.friendRelationshipCreateTime = new Date();

        friendReq.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      }
      res.json({Success: "Friend Already"});
    });
  },
  findMyFriend: function(req, res){
    FriendRelationshipModel.find({
      friendType: 'Friend',
      $or:[
        {friendRequester: req.body.user},
        {friendReceiver: req.body.user},
      ]}, function(err, obj){
        if (err) res.json({Error: err});
        if (obj) res.json({Success: obj});
      });
    },
    findMyFriendRequest: function(req, res){
      FriendRelationshipModel.find({
        friendType: 'Request', friendReceiver: req.body.friendReceiver
      }, function(err, obj){
        if (err) res.json({Error: err});
        if (obj) res.json({Success: obj});
      });
    },
    friendRemove: function(req, res){
      FriendRelationshipModel.findOne({
        friendRequester:req.body.friendRequester,
        friendReceiver:req.body.friendReceiver,
      }, function(err, obj) {
        if (err) res.json({Error: err});
        if (!obj) {res.json({Success: "No such Friend"})};
        if(obj.friendType != 'Friend'){
          {res.json({Success: "you are not Friends"})};
        }else{
          res.json({succ : obj});
          //del
        }
      });
    }
  }
