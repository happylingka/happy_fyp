var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');

/* GET home page. */
router.get('/', PostController.getAll);
router.get('/:uid', PostController.getBy);
router.post('/createPost', PostController.create);
router.put('/', PostController.edit);
router.post('/deletePost', PostController.remove);

//post add like and remove like

module.exports = router;
