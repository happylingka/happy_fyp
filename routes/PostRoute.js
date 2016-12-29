var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');

/* GET home page. */
router.get('/', PostController.getAll);
router.get('/:uid', PostController.getBy);
router.post('/', PostController.create);
router.put('/', PostController.edit);
router.delete('/:postId', PostController.remove);

module.exports = router;
