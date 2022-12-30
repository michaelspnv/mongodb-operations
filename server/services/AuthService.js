const { MongoClient } = require("mongodb")
require("dotenv").config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const clusterUrl = process.env.MONGO_CLUSTER_URL
const authMechanism = process.env.MONGO_AUTH_MECHANISM

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`

const client = new MongoClient(uri)

module.exports = class AuthService {
  static async register(user) {
    try {
      await client.connect()

      const registeredUser = await client
        .db("github-auth")
        .collection("users")
        .insertOne(user)

      return registeredUser
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  }
}
