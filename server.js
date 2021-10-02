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
//MIDDLEWARE
///////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use('/animals', AnimalRouter);
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