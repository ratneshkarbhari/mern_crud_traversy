const asyncHandler = require("express-async-handler")
//const User = require("../models/userModel")


// desc  register new user
// route POST /api/users
// access public 
const registerUser = asyncHandler(async(req,res) => {
    res.json({message:"Register User"})
})

// desc  login new user
// route POST /api/users/login
// access public 
const loginUser = asyncHandler(async(req,res) => {
    res.json({message:"login User"})
})


// desc  get logged in user data
// route GET /api/users/me
// access public 
const getMe = asyncHandler(async(req,res) => {
    res.json({message:"user data display"})
})

module.exports = {

    registerUser,loginUser,getMe
    
}