var express = require('express');
var router = express.Router();
var CommentController = require('../controllers/CommentController.js');

router.post('/addComment', CommentController.create);
router.post('/getAllByPostId', CommentController.getAllByPostId);
router.put('/', CommentController.edit);
router.post('/deleteComment', CommentController.remove);

module.exports = router;
