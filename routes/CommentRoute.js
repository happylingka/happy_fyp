var express = require('express');
var router = express.Router();
var CommentController = require('../controllers/CommentController.js');

router.post('/', PostController.create);
router.put('/', PostController.edit);
router.delete('/', PostController.remove);

module.exports = router;
