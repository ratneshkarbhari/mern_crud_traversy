const express = require("express")

//const app = express()

const router = express.Router()

const {
    getGoals,setGoal,updateGoal,deleteGoal
} = require("../controllers/goalController")

// Get goals
router.route("/").get(getGoals).post(setGoal)

//router.post("/", setGoal)

router.route("/:id").put(updateGoal).delete(deleteGoal)

//router.delete("/:id", deleteGoal)

module.exports = router