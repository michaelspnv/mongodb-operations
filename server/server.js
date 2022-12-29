const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./routes/register.js")

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/register", router)

app.listen(PORT, () => {
  console.log("Server started.")
})
