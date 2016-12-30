var AlbumModel = require('../models/AlbumModelModel.js');

module.exports ={

  create: function(req, res){
    var album = new AlbumModelModel({
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
    AlbumModelModel.find({albumCreator: req.body.albumCreator}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    AlbumModelModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
