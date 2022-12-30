const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController.js")

router.post("/", AuthController.register)

module.exports = router
