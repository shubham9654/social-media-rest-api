const express = require('express');
const { updateUser, deleteUser, getUser, followUser, unfollowUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/:userId', getUser).put('/:userId', updateUser).delete('/:userId', deleteUser);
router.put('/:userId/follow', followUser).put('/:userId/unfollow', unfollowUser);

module.exports = router;
