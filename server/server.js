const express = require("express")
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

app.get("/api/movies", (req, res) => {
  async function run() {
    try {
      await client.connect()

      const cursor = await client
        .db("sample_mflix")
        .collection("movies")
        .find({})
        .limit(100)
        .toArray()

      res.send(cursor)
    } finally {
      await client.close()
    }
  }
  run().catch(console.log)
})

app.listen(PORT, () => {
  console.log("Server started.")
})
