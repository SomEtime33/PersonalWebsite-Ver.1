

const router = require('express').Router();
const {getExperience, addExperience, getExperienceId, updateExperience, delExperience} = require('../controllers/ExperienceCtrl');





// .................Experience...................

// get Experience user
router.get('/experience', getExperience)




// add Experience user
router.post('/experience', addExperience)



// get specific Experience user by id
router.get('/experience/:id',getExperienceId)



// update speficific Experience user by id
router.put('/experience/update/:id', updateExperience)



// delete specific Experience user by id
router.delete('/experience/:id', delExperience)


module.exports = router;