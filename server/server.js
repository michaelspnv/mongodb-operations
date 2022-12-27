const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")
require("dotenv").config()

const app = express()
const PORT = 3001

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const clusterUrl = process.env.MONGO_CLUSTER_URL
const authMechanism = process.env.MONGO_AUTH_MECHANISM

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`

const client = new MongoClient(uri)

app.use(cors())

const urlencodedParser = express.urlencoded({ extended: false })

// app.get("/api/movies", (req, res) => {
//   async function run() {
//     try {
//       await client.connect()

//       const cursor = await client
//         .db("sample_mflix")
//         .collection("movies")
//         .find({ year: { $gt: 2014 } })
//         .project({ _id: 0, title: 1 })
//         .limit(100)
//         .toArray()

//       res.send(cursor)
//     } finally {
//       await client.close()
//     }
//   }
//   run().catch(console.log)
// })

app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body.username)
  res.status(200).json({ message: "OK" })
})

app.listen(PORT, () => {
  console.log("Server started.")
})
