var AlbumModel = require('../models/AlbumModel.js');

module.exports = {

  create: function(req, res){
    var album = new AlbumModel({
      'albumName' : req.body.albumName,
      'albumCreator' : req.body.albumCreator,
      'albumCreateTime' : new Date(),
      'albumLocation' : req.body.albumLocation
    });
    album.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });
  },
  getAllByUId: function(req, res){
    AlbumModel.find({albumCreator: req.body.albumCreator
    }, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  edit: function(req, res){
    AlbumModel.findOne({_id: req.body.id}, function(err, album) {
      if (err) res.json({Error: err});
      if (!album) {res.json({Success: "No such album"})};
      if (album) {
        album.albumName = req.body.albumName ? req.body.albumName : album.albumName;
        album.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    AlbumModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
