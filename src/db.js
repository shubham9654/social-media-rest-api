require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log(`\n MongoDB connected !! DB HOST ON PORT: ${port}`);
	} catch (err) {
		console.log(err);
	};
};

module.exports = start;
