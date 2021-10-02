const express = require('express');
const Animal = require('../models/animals.js');

const router = express.Router();

//SEED -get
router.get('/seed', (req, res) => {
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
router.get('/', (req, res) => {
    Animal.find({}, (err, animals) => {
        res.render('animals/index.ejs', { animals });
    });
});
//NEW -get
router.get('/new', (req, res) => {
    res.render('animals/new.ejs');
});
//DESTROY -delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Animal.findByIdAndDelete(id, (err, animal) => {
        res.redirect('/animals');
    });
});
//UPDATE - put
router.put('/:id', (req, res) => {
    const { id } = req.params;
    req.body.extinct = req.body.extinct === "on" ? true: false
    Animal.findByIdAndUpdate(id, req.body, {new:true}, (err, animal) => {
        res.redirect('/animals');
    });
});
//CREATE - post
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false
    Animal.create(req.body, (err, animal) => {
        res.redirect('/animals');
    });
});
//EDIT - get
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    Animal.findById(id, (err, animal) => {
        res.render('animals/edit.ejs', { animal });
    });
});
//SHOW - get
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Animal.findById(id, (err, animal) => {
        res.render('animals/show.ejs', { animal });
    });
});
module.exports = router