
const router = require('express').Router();
const {getAbout, addAbout, getAboutId, updateAbout, delAbout} = require('../controllers/aboutCtrl');

// const aboutSchema = require('../models/aboutModel');



// ..................about...................

// get about user
router.get('/about', getAbout)


// add about user
router.post('/about', addAbout)


// get specific user by id
router.get('/about/:id',getAboutId)


// update speficific user by id
router.put('/about/update/:id', updateAbout)


// delete specific user by id
router.delete('/about/:id', delAbout)


module.exports = router;