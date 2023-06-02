const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const registerUser = async (req, res) => {
	try {
		const { username, email, password, isAdmin = false } = req.body;
		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
			username,
			email,
			password: hashPassword,
			isAdmin
		});
		if (newUser) {
			res.json({ message: 'successfully created', user: newUser });
		}
	} catch (err) {
		console.log(err);
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			const isPasswordMatch = await bcrypt.compare(password, user.password);
			if (isPasswordMatch) {
				res.json({ message: 'successfully login', user });
			} else {
				res.status(401).send({ message: 'invalid credentials' });
			}
		} else {
			res.status(401).send({ message: 'user not found' });
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	registerUser,
	loginUser
};
