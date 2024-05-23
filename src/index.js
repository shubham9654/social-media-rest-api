require('dotenv').config();
const app = require('./app.js');
const db = require('./db.js');

db().then(() => {
	app.listen(process.env.PORT || 8000, () => {
		console.log(`Server is Running on Port : ${process.env.PORT}`);
	});
}).catch((error) => {
	console.log('MongoDB Connection failed !! ', error);
});
