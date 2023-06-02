const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const updateUser = async (req, res) => {
	try {
		const { password } = req.body;
		if (req.body.password) {
			req.body.password = await bcrypt.hash(password, 10);
		}
		const userId = req.params.id;
		const updatedUser = await User.findByIdAndUpdate(userId, {
			$set: req.body
		}, { new: true });
		if (updatedUser) {
			const { password, ...rest } = updatedUser._doc;
			res.status(200).json({ status: 'success', user: rest });
		} else {
			res.status(404).json({ errMsg: 'user not found' });
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	updateUser
};
