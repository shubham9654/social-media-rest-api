const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

// init
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use((err, req, res, next) => {
	console.log(err, 'Internal server error');
	res.status(500).json({ error: 'Internal server error' });
});

// connection
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
