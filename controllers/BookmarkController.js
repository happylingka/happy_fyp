var BookmarkModel = require('../models/BookmarkModel.js');

module.exports ={

  create: function(req, res){
    var bookmarkCreator = req.body.bookmarkCreator;
    var bookmarkLocation = req.body.bookmarkLocation;
    BookmarkModel.findOne({
      'bookmarkCreator' : bookmarkCreator,
      'bookmarkLocation' : bookmarkLocation
    }, function(e, bkmark){
      if (e) {
        res.json ({Error : e});
      } else {
        if (bkmark) res.json ({result : "Location is bookmarked"});
        if (!bkmark) {
          var bookmark = new BookmarkModel({
            'bookmarkCreator' : bookmarkCreator,
            'bookmarkLocation' : bookmarkLocation
          });
          bookmark.save(function(err, obj){
            if (err) res.json({Error : err});
            if (obj) res.json({Succ : obj});
          });
        }
      }

    });
  },
  getAllByUId: function(req, res){
    BookmarkModel.find({bookmarkCreator: req.body.bookmarkCreator}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  remove: function(req, res){
    //find -> yes: can remove, no: cant remove
    //condition: 1) bid exist, 2)uid=uid

    BookmarkModel.findOne({
      bookmarkCreator : req.body.bookmarkCreator,
      _id : req.body.id
    }, function(e, bkmark){
      if (e) {
        res.json ({error : e});
      }else{
        if (!bkmark)
        {
          res.json({Success: "No such bookmark"});
        }
        else{
          bkmark.remove(function(error, removedObj){
            if (error) res.json({Error: error});
            if (removedObj) res.json({succ : removedObj});
          });
        }
      }
    })
  }
}
