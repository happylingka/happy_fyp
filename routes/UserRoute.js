var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET home page. */
router.post('/createUser', UserController.create);
router.post('/getAllUser', UserController.getAll);
router.post('/getUserById', UserController.getBy);
router.post('/editUserById', UserController.editUserInfo);
router.post('/updateLocation', UserController.updateUserLocation);

module.exports = router;
