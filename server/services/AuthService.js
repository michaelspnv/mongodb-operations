const { MongoClient } = require("mongodb")
const bcrypt = require("bcrypt")
require("dotenv").config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const clusterUrl = process.env.MONGO_CLUSTER_URL
const authMechanism = process.env.MONGO_AUTH_MECHANISM

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`

const client = new MongoClient(uri)

module.exports = class AuthService {
  static async register({ username, password }) {
    try {
      await client.connect()

      const hash = bcrypt.hashSync(password, 7)

      const newUser = {
        username,
        hashPassword: hash,
      }

      if (
        await client.db("github-auth").collection("users").findOne({ username })
      )
        return { errorType: "authError", message: "Username is already used." }

      const registeredUser = await client
        .db("github-auth")
        .collection("users")
        .insertOne(newUser)

      return { registeredUser, message: "Signed up." }
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  }
}
