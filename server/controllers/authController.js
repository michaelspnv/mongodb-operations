const { MongoClient } = require("mongodb")
require("dotenv").config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const clusterUrl = process.env.MONGO_CLUSTER_URL
const authMechanism = process.env.MONGO_AUTH_MECHANISM

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`

const client = new MongoClient(uri)

class AuthController {
  async register(req, res) {
    try {
      await client.connect()

      const { username, password } = req.body

      const cursor = await client
        .db("github-auth")
        .collection("users")
        .insertOne({
          username,
          password,
        })

      res.json(cursor)
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  }
}

module.exports = new AuthController()
