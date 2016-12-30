var express = require('express');
var router = express.Router();
var AlbumController = require('../controllers/AlbumController');

router.post('/createAlbum', AlbumController.create);
router.post('/getAllByUserId', AlbumController.getAllByUId);
router.post('/removeAlbum', AlbumController.remove);
router.post('/editAlbum', AlbumController.edit);

module.exports = router;
