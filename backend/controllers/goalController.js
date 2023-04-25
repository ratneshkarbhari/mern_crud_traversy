const asyncHandler = require("express-async-handler")

const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Get Goals"})
})

const setGoal = asyncHandler(async(req,res)=>{

    if (req.body.text) {
        
    }else{
        res.status(400)
        throw new Error("Please add a text field")
    }
    
    res.status(200).json({message:"set Goals"})
})

const updateGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}