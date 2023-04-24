const express = require("express")

const app = express()

const router = express.Router()

// Get goals
router.get("/", (req,res)=>{
    res.status(200).json({message:"Get Goals"})
})
router.post("/", (req,res)=>{
    res.status(200).json({message:"set Goals"})
})

router.put("/:id", (req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

router.delete("/:id", (req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
})


module.exports = router