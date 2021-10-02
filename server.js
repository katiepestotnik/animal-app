//////////////////
//Dependencies
//////////////////
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const PORT = process.env.PORT;
const AnimalRouter = require('./controllers/animals');
const UserRouter = require('./controllers/user');
const HomeRouter = require('./controllers/home')
const session = require('express-session');
const MongoStore = require('connect-mongo');
//MIDDLEWARE
///////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),
    saveUninitialized: true,
    resave: false
}))
app.use('/animals', AnimalRouter);
app.use('/user', UserRouter);
app.use('/', HomeRouter);
//////////////////////////
//ROUTES
//////////////////////////
//HOME -get
app.get('/', (req, res) => {
    res.send(`HOMEPAGE`);
});
//////////////////////
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});