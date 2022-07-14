
const router = require('express').Router();
const {getEducation, addEducation, getEducationId, updateEducation, delEducation} = require('../controllers/educationCtrl');





// .................education...................

// get education user
router.get('/education', getEducation)



// add education user
router.post('/education', addEducation)



// get specific education user by id
router.get('/education/:id',getEducationId)



// update speficific education user by id
router.put('/education/update/:id', updateEducation)



// delete specific education user by id
router.delete('/education/:id', delEducation)


module.exports = router;