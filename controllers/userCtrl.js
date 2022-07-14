
const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



 const userCtrl = {

    //register
    registerUser: async (req, res)=> {
        const {username, email, password} = req.body;

        
    
        const user = await User.findOne({'email':email});
        if(user) { //when the user is already exists 
            return res.status(400).json({msg:"Email already exists"})
        }
        //create big password and then update the schema

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new userSchema({
            username:username,
            email:email,
            password:passwordHash
            
        })

         await newUser.save();

        res.json({msg:"register success"})

    },








    //login
    loginUser: async (req, res)=> {
        res.send('login user')
    } ,

    //verify
    verifiedToken :async (req, res)=> {
        res.send('verify user')
    }

 }


 module.exports = userCtrl;