var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET home page. */
router.post('/', UserController.create);

module.exports = router;
