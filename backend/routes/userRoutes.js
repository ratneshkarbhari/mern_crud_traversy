const express = require("express")

//const app = express()

const router = express.Router()

const {registerUser,loginUser,getMe} = require("../controllers/userController")

const {protect} = require("../middleware/authMiddleWare")

// Get goals
router.route("/").post(registerUser)

router.route("/login").post(loginUser)

router.get("/me",protect, getMe)


module.exports = router