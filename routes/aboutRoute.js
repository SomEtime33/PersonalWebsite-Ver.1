
const router = require('express').Router();
const { getAbout, addAbout, getAboutId, updateAbout, delAbout } = require('../controllers/aboutCtrl');
// const {getAbout, addAbout, getAboutId, updateAbout, delAbout} = require('../controllers/aboutCtrl');

const aboutSchema = require('../models/aboutModel');



// ..................about...................

// get about user
router.get('/about', async (req, res)=> {
    const about = await aboutSchema.find();
    
    try {
        res.json(about);
    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }


    // //second way
    // aboutSchema.find()
    // .then(about=>res.json(about))
    // .catch(err=>res.status(500).json('error: ${error}'))

})

// add about user
router.post('/about', async (req, res)=> {
    const {about} = req.body;

    try {
        const newAbout = new aboutSchema({

            about
    
        })
        await newAbout.save();
        res.json(newAbout);
    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }

    // //second way
    // const newAbout = new aboutSchema({
    //     about

    // })

    // newAbout.save()
    // .then(about=>res.json('that areticle was sended')) 
    // .catch(err=>res.status(500).json('error: ${error}'))



})

// get specific user by id
router.get('/about/:id', (req, res)=> {
    res.send('hello from get about by id')
})

// update speficific user by id
router.put('/about/update/:id', (req, res)=> {
    res.send('hello from update about')
})

// delete specific user by id
router.delete('/about/:id', (req, res)=> {
    res.send('hello from delete about')
})


module.exports = router;