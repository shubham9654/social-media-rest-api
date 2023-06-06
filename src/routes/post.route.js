const express = require('express');
const { createPost, getAllPosts, deletePost, updatePost, likePost, dislikePost } = require('../controllers/post.controller');

const router = express.Router();

router.get('/:userId', getAllPosts);
router.post('/', createPost).put('/:postId', updatePost).delete('/:postId', deletePost);
router.put('/:postId/like', likePost).put('/:postId/dislike', dislikePost);

module.exports = router;
