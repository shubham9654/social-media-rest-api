const express = require('express');
const { updateUser, deleteUser, getUser, followUser, unfollowUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/:id', getUser).put('/:id', updateUser).delete('/:id', deleteUser);
router.put('/:id/follow', followUser).put('/:id/follow', unfollowUser);

module.exports = router;
