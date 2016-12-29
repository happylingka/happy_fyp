var LocationModel = require('../models/LocationModel.js');

module.exports = {
  create: function(req, res){
    var Location = new LocationModel({
      'locationName' : req.body.locationName,
      'locationStreet' : req.body.locationStreet? req.body.locationStreet : '',
      'locationCity' : req.body.locationCity ? req.body.locationCity : '',
      'locationCountry' :req.body.locationCountry ? req.body.locationCountry : '',
      'locationCoordinate' : req.body.locationCoordinate
    });

    Location.save(function(err, obj){
      if (err) res.json({Error: err});
      if (obj) res.json({Success: obj});
    });
  }
}
