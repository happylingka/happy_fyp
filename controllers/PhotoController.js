var PhotoModel = require('../models/PhotoModel.js');

module.exports ={

  create: function(req, res){
    var photo = new PhotoModel({
      'photoAlbum' : req.body.photoAlbum,
      'photoCreator' : req.body.photoCreator,
      'photoCreateTime' : new Date(),
      'photoLocation' : req.body.photoLocation,
      'photoSource' : req.body.photoSource
    });
    photo.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });
  },
  //get all by user id
  getAllByUId: function(req, res){
    PhotoModel.find({photoCreator: req.body.photoCreator}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  //get all by album id
  getAllByAId: function(req, res){
    PhotoModel.find({photoAlbum: req.body.photoAlbum}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    PhotoModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
