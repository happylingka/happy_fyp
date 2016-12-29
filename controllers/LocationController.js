var LocationModel = require('../models/LocationModel.js');

module.exports = {
  create: function(req, res){
    var Location = new LocationModel({
      'locationName' : req.body.locationName,
      'locationStreet' : req.body.locationStreet ? req.body.locationStreet : '',
      'locationCity' : req.body.locationCity ? req.body.locationCity : '',
      'locationCountry' :req.body.locationCountry ? req.body.locationCountry : '',
      'locationCoordinate' : req.body.locationCoordinate
    });

    Location.save(function(err, obj){
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  },
  edit: function(req, res){
    LocationModel.findOne({_id: req.body.id}, function(err, obj) {
      if (err) res.json({Error: err});
      if (!obj) {res.json({Success: "No such Location"})};
      if (obj) {
        obj.locationName = req.body.locationName ? req.body.locationName : obj.locationName;
        obj.locationStreet = req.body.locationStreet ? req.body.locationStreet : obj.locationStreet;
        obj.locationCity = req.body.locationCity ? req.body.locationCity : obj.locationCity;
        obj.locationCountry = req.body.locationCountry ? req.body.locationCountry : obj.locationCountry;
        obj.locationCoordinate = req.body.locationCoordinate ? req.body.locationCoordinate : obj.locationCoordinate;

        obj.save(function(e, obj) {
          if (e) res.json({Error: e});
          if (obj) res.json({Success: obj});
        });
      };
    });
  },
  getAll: function(req, res) {
    LocationModel.find(function(err, obj) {
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  }
}
