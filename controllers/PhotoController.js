var PhotoModel = require('../models/PhotoModelModel.js');

module.exports ={

  create: function(req, res){
    var photo = new PhotoModelModel({
      'photoName' : req.body.photoName,
      'photoCreator' : req.body.photoCreator,
      'photoCreateTime' : new Date(),
      'photoLocation' : req.body.photoLocation
    });
    photo.save(function(err, obj){
      if (err) res.json({Error : err});
      if (obj) res.json({Succ : obj});
    });
  },
  getAllByUId: function(req, res){
    PhotoModelModel.find({photoCreator: req.body.photoCreator}, function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  remove: function(req, res){
    var id = req.body.id;
    PhotoModelModel.findByIdAndRemove(id, function (err, obj) {
      if (err) res.json({Error: err}) ;
      if (obj) res.json({Success : obj});
    });
  }
}
