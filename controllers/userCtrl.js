
const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



 const userCtrl = {

    //register
    registerUser: async (req, res)=> {
        const {username, email, password} = req.body;
        try {
            
        
    
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
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }

    },








    //login
    loginUser: async (req, res)=> {
        try {
            
            const {email, password} = req.body;
            const user = await User.findOne({email:email});
            if(!user) {
                return res.status(400).json({msg:"user does not exist"})

            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({msg:"Incorrect Password"})
            }

            //if login is successful
            const payload = {
                id:user._id,
                name:user.username
            }

            const token = jwt.sign(payload, process.env.TOKEN_SECRET,
                {expiresIn: "1d"})
                res.json({token})
        




        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    } ,

    //verify
    verifiedToken :async (req, res)=> {
        res.send('verify user')
    }

 }


 module.exports = userCtrl;