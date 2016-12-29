var PostModel = require('../models/PostModel.js');

module.exports = {
  create: function(req, res) {
    var Post = new PostModel({
      'postContent' : req.body.postContent,
      'postCreator' : req.body.postCreator,
      'postCreateDate' : new Date(),
      'postLocation' : req.body.postLocation,
      'postLike' : 0
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
  addlike: function(req, res){


  },
  edit: function(req, res) {
    PostModel.findOne({creator: req.params.id}, function(err, post) {
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
    var id = req.params.postId;
    PostModel.findByIdAndRemove(id, function (err, obj) {
    if (err) res.json({Error: err}) ;
    if (obj) res.json({Success : obj});
  });
  }
}
