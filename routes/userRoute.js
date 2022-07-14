
const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');


// Register
router.post('/register', userCtrl.registerUser)

//Login
router.post('/login', userCtrl.loginUser)

//verify
router.get('/verify', userCtrl.verifiedToken)

module.exports = router;