var CommentModel = require('../models/CommentModel.js');

module.exports = {
  create: function(req, res){
    var comment = new commentCreateTime({
      'commentCreator' : req.body.commentCreator,
      'commentContent' : req.body.commentContent,
      'commentCreateTime' : new Date()
    });
    comment.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });
  },
  edit: function(req, res){
    CommentModel.findOne({id: req.body.id}, function(err, comment) {
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
  )},
  remove: function(req, res){
    var id = req.body.id;
    CommentModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
