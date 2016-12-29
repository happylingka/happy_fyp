var BookmarkModel = require('../models/BookmarkModel.js');

module.exports ={

  create: function(req, res){
    var bookmark = new BookmarkModel({
      'bookmarkCreator' : req.body.bookmarkCreator,
      'bookmarkLocation' : req.body.bookmarkLocation
    });
    bookmark.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });
  },
  getAllByUId: function(req, res){
    BookmarkModel.find({bookmarkCreator: req.body.bookmarkCreator}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    BookmarkModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
