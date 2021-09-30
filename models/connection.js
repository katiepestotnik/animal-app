require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;
//////////////////////
//Connect with Mongoose
//////////////////////
const db = mongoose.connection;
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('connected', () => {
    console.log('mongo connected');
});
db.on('error', (error) => {
    console.log(error);
});

//Export
module.exports = mongoose