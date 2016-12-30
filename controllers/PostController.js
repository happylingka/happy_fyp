var PostModel = require('../models/PostModel.js');

module.exports = {
  create: function(req, res) {
    var Post = new PostModel({
      'postContent' : req.body.postContent,
      'postCreator' : req.body.postCreator,
      'postCreateDate' : new Date(),
      'postLocation' : req.body.postLocation
    });
    Post.save(function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  getBy: function(req, res) {
    PostModel.find({postCreator: req.params.uid}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  getAll: function(req, res) {
    PostModel.find(function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  addLikeByUid: function(req, res){

    PostModel.findOne({
      _id: req.body.postId
    }, function(err, post) {
      if (err) res.json({Error: err});
      if (!post) {res.json({Success: "No such post"})};
      if (post) {
        var idx = post.postLike.indexOf(req.body.uid);
        if (idx < 0) {
          post.postLike.push(req.body.uid);
        } else {
          post.postLike.splice(idx, 1);
        }

        post.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });

      }
    });

  },
  edit: function(req, res) {
    PostModel.findOne({
      _id: req.body.id, postCreator: req.body.postCreator
    }, function(err, post) {
      if (err) res.json({Error: err});
      if (!post) {res.json({Success: "No such post"})};
      if (post) {
        post.postContent = req.body.postContent ? req.body.postContent : post.postContent;
        post.postUpdateDate = new Date();
        post.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      }
    });
  },
  remove: function(req, res){
    var id = req.body.postId;
    PostModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
