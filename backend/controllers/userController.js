const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")

const generate_token = (id)=>{
    
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}


// desc  register new user
// route POST /api/users
// access public 
const registerUser = asyncHandler(async(req,res) => {

    const {name,email,password} = req.body

    if(!name||!email||!password){
        res.status(400)
        throw new Error("Send all fields")
    }
    
    // Fetch user by email
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })


    if(user){
        res.status(201).json(
            {_id:user._id,name:user.name,email:user.email,token:generate_token(user._id)}
        )
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }

})

// desc  login new user
// route POST /api/users/login
// access public 
const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(user&&(await bcrypt.compare(password,user.password))){
        res.status(200).json(
            {_id:user.id,name:user.name,email:user.email,token:generate_token(user._id)}
        )
    }else{
        res.status(400)
        throw new Error("Invalid credentials")
    }

})


// desc  get logged in user data
// route GET /api/users/me
// access private 
const getMe = asyncHandler(async(req,res) => {
    res.json({message:"user data display"})
})


module.exports = {

    registerUser,loginUser,getMe
    
}