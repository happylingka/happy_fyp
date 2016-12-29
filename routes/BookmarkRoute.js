var express = require('express');
var router = express.Router();
var BookmarkController = require('../controllers/BookmarkController');

router.post('/createBookmark', BookmarkController.create);
router.post('/getAllByUserId', BookmarkController.getAllByUId);
router.post('/removeBookmark', BookmarkController.remove);

module.exports = router;
