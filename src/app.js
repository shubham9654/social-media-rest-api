const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
	console.log(err, 'Internal server error');
	res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3000;
const start = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		app.listen(port, () => console.log(`Server is running on port ${port} ...`));
	} catch (err) {
		console.log(err);
	};
};

start();
