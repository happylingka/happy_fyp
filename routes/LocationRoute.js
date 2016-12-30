var express = require('express');
var router = express.Router();
var LocationController = require('../controllers/LocationController');

/* GET home page. */
router.post('/createLocation', LocationController.create);
//router.post('/editLocation', LocationController.edit);
router.put('/', LocationController.edit);
router.post('/getAllLocation', LocationController.getAll);
router.post('/removeLocation', LocationController.remove);

module.exports = router;
