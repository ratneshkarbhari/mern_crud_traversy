const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")

// desc  fetch all goals
// route GET /api/users
// access public 
const getGoals = asyncHandler(async(req,res) => {

    const goals = await Goal.find({user:req.user.id})
    
    res.status(200).json(goals)

})

const setGoal = asyncHandler(async(req,res)=>{

    if (req.body.text) {
        const goal = await Goal.create({
            text: req.body.text,
            user : req.user._id
        })

        res.status(200).json(goal)
        
    }else{
        res.status(400)
        throw new Error("Please add a text field")
    }
    

})

const updateGoal = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    if(goal.user.toString()!=user.id){
        res.status(401)
        throw new Error("User not authorized to update")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,{
        text: req.body.text
    }, {
        new : true
    })
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async(req,res)=>{

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }


    user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error("User not found")
    }

    if(goal.user.toString()!=user.id){
        res.status(401)
        throw new Error("User not authorized to delete")
    }

    const deleteGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'Goal Deleted'})

    
})

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}