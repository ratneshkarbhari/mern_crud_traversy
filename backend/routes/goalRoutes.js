const express = require("express")

//const app = express()

const router = express.Router()

const {
    getGoals,setGoal,updateGoal,deleteGoal
} = require("../controllers/goalController")

const {protect} = require("../middleware/authMiddleWare")


// Get goals

router.post("/",protect, setGoal)
router.get("/",protect, getGoals)


// router.route("/").get(getGoals).post(setGoal)

//router.post("/", setGoal)

router.put("/:id",protect, updateGoal)

router.delete("/:id",protect, deleteGoal)



// router.route("/:id").put(updateGoal).delete(deleteGoal)

//router.delete("/:id", deleteGoal)

module.exports = router