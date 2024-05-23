const Post = require('../models/post.model');

const getAllPosts = async (req, res, next) => {
	try {
		const userId = req.params.userId;

		const posts = await Post.find({ userId });

		if (posts.length > 0) {
			res.json({ message: 'Posts retrieved successfully!', posts });
		} else {
			res.status(404).send('No posts found for the user!');
		}
	} catch (err) {
		next(err);
	}
};

const createPost = async (req, res, next) => {
	try {
		const post = await Post.create(req.body);

		if (post) {
			res.json({ message: 'Post successfully created!', post });
		} else {
			res.status(404).send('No post found!');
		}
	} catch (err) {
		next(err);
	}
};

const updatePost = async (req, res, next) => {
	try {
		const postId = req.params.postId;
		const updatedPost = req.body;

		const post = await Post.findByIdAndUpdate(postId, updatedPost, { new: true });

		if (post) {
			res.json({ message: 'Post successfully updated!', post });
		} else {
			res.status(404).send('Post not found!');
		}
	} catch (err) {
		next(err);
	}
};

const deletePost = async (req, res, next) => {
	try {
		const postId = req.params.postId;
		const post = await Post.findByIdAndDelete(postId);

		if (post) {
			res.json({ message: 'Post successfully deleted!', post });
		} else {
			res.status(404).send('Post not found!');
		}
	} catch (err) {
		next(err);
	}
};

const likePost = async (req, res, next) => {
	try {
		const postId = req.params.postId;
		const userId = req.body.userId;

		const post = await Post.findById(postId);

		if (post) {
			if (!post.likes.includes(userId)) {
				await Post.findByIdAndUpdate(
					postId,
					{ $push: { likes: userId } },
					{ new: true }
				);
			}
			res.json({ message: 'Post liked successfully!', post });
		} else {
			res.status(404).json({ errMsg: 'Post not found!' });
		}
	} catch (err) {
		next(err);
	}
};

const dislikePost = async (req, res, next) => {
	try {
		const postId = req.params.postId;
		const userId = req.body.userId;

		const post = await Post.findByIdAndUpdate(
			postId,
			{ $pull: { likes: userId } },
			{ new: true }
		);

		if (post) {
			res.json({ message: 'Post disliked successfully!', post });
		} else {
			res.status(404).json({ errMsg: 'Post not found!' });
		}
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getAllPosts,
	createPost,
	updatePost,
	deletePost,
	likePost,
	dislikePost
};
