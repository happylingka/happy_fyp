var express = require('express');
var router = express.Router();
var FriendRelationshipController = require('../controllers/FriendRelationshipController');

/* GET home page. */

router.post('/addFriend', FriendRelationshipController.friendRequest);
router.put('/', FriendRelationshipController.friendAccept);
router.post('/findMyFriend',FriendRelationshipController.findMyFriend);
router.post('/findMyFriendRequest',FriendRelationshipController.findMyFriendRequest);
router.post('/removeFriend', FriendRelationshipController.friendRemove);


module.exports = router;
