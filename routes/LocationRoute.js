var express = require('express');
var router = express.Router();
var LocationController = require('../controllers/LocationController');

/* GET home page. */
router.post('/', LocationController.create);


module.exports = router;
