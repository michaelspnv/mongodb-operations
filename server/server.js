const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const registerRouter = require("./routes/register.js")
const loginRouter = require("./routes/login")

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/register", registerRouter)
app.use("/login", loginRouter)

app.listen(PORT, () => {
  console.log("Server started.")
})
