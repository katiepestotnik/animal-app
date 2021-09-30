//////////////////
//Dependencies
//////////////////
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const PORT = process.env.PORT;
const Animal = require('./models/animals.js');



//MIDDLEWARE
///////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static('public'));
app.use(methodOverride("_method"));
//////////////////////////
//ROUTES
//////////////////////////
//HOME -get
app.get('/', (req, res) => {
    res.send(`HOMEPAGE`)
});
//SEED -get
app.get('/animals/seed', (req, res) => {
    const startAnimals = [
        { species: "Dumbo Octopus", extinct: false, location: ">= 13100 feet under the sea", lifeExpectancy: 5 },
        { species: "Tarsier", extinct: false, location: "Southeast Asia", lifeExpectancy: 12 },
        { species: "Tasmanian Tiger", extinct: true, location: "Tasmania, Australia, New Guinea", lifeExpectancy: 5 }
    ]
    Animal.deleteMany({}, (err, data) => {
        Animal.create(startAnimals, (err, data) => {
            res.json(data);
        });
    });
});
//INDEX -get
app.get('/animals', (req, res) => {
    Animal.find({}, (err, animals) => {
        res.render('animals/index.ejs', { animals })
    });
});
//NEW -get

//DESTROY -delete

//UPDATE - put

//CREATE - post

//EDIT - get

//SHOW - get
app.get('/animals/:id', (req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
        res.render('animals/show.ejs', { animal })
    });
});

//////////////////////
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});