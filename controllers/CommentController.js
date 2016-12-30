var CommentModel = require('../models/CommentModel.js');
var PostModel = require('../models/PostModel.js');

module.exports = {
  create: function(req, res){
    var comment = new CommentModel({
      'commentCreator' : req.body.commentCreator,
      'commentContent' : req.body.commentContent,
      'commentCreateTime' : new Date(),
      'commentPostId' : req.body.commentPostId
    });
    comment.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });

    //add comment to the post
    //findone of the post
/*
    var postId = req.body.commentPostId;
    PostModel.findOne({PostId: postId}, function(err, post) {

      post.postComment.push(id)

      if (err) res.json({Error: err});
      if (!post) {res.json({Success: "No such post"})};
      if (post) {
        if (!post.postComment){
          //null
        res.json({result: "no any comment"});
          //how to save obj id in array
        }else{
          //not null
          //add obj id to an array
          res.json({result: "comment exist"});
        }
        //post.save
        post.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });

    //edit the post-> add comment id
*/
  },
  getAllByPostId: function(req, res){
    CommentModel.find({commentPostId: req.body.commentPostId}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  edit: function(req, res){
    CommentModel.findOne({_id: req.body.id}, function(err, comment) {
      if (err) res.json({Error: err});
      if (!comment) {res.json({Success: "No such comment"})};
      if (comment) {
        comment.commentContent = req.body.commentContent ? req.body.commentContent : comment.commentContent;
        comment.commentUpdateDate = new Date();
        comment.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    CommentModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
