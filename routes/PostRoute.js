var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');


router.get('/', PostController.getAll);
router.get('/:uid', PostController.getBy);
router.post('/createPost', PostController.create);
router.post('/editPost', PostController.edit);
router.post('/deletePost', PostController.remove);
router.post('/addLikeByUid', PostController.addLikeByUid);


//post add like and remove like

module.exports = router;
