const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const registerUser = async (req, res, next) => {
	try {
		const { username, email, password, isAdmin = false } = req.body;
		const hashPassword = await bcrypt.hash(password, 10);

		const existingUser = await User.findOne({ $or: [{ username }, { email }] });

		if (existingUser) {
			res.status(409).json({ message: 'User already exists' });
		} else {
			const newUser = await User.create({
				username,
				email,
				password: hashPassword,
				isAdmin
			});
			// Omitting password from the response
			const { password, ...userWithoutPassword } = newUser.toObject();
			res.json({ message: 'Successfully created', user: userWithoutPassword });
		}
	} catch (err) {
		next(err);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			const isPasswordMatch = await bcrypt.compare(password, user.password);
			if (isPasswordMatch) {
				// Exclude password from the response
				const { password, ...userWithoutPassword } = user.toObject();
				res.json({ message: 'Successfully logged in', user: userWithoutPassword });
			} else {
				res.status(401).send({ message: 'invalid credentials' });
			}
		} else {
			res.status(401).json({ message: 'User not found' });
		}
	} catch (err) {
		next(err);
	}
};

module.exports = {
	registerUser,
	loginUser
};
