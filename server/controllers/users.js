const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../config');

signToken = user => {
    return JWT.sign({
        iss: 'notesApp',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    },JWT_SECRET)
}

getUser = function(email) {
    return  User.findOne({email});
}

module.exports = {
    signUp: async (req, res, next) => {
        const { firstName,lastName,email,password } = req.value.body;
 
        const foundUser = await User.findOne({email});
        if(foundUser){
            return res.status(403).send({"error":"Email is in use."})
        }
        //Create New User
        const newUser = new User({ firstName,lastName,email,password });
        await newUser.save();
    
        res.json({"message":"User Created"})
        const token = signToken(newUser);
        res.status(200).json({token});
    },

    signIn: async (req, res, next) => {
        console.log('Users logged in',req.user);
         const token = signToken(req.user);
         res.status(200).json({token});

    },
    secret: async (req, res, next) => {
        console.log('Users controller secret');
    }
}