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
      // password and username validation

      let error

      if (!password || password.length < 5) {
        error = {
          errorType: "validationError",
          message: "Password should contain at least 5 characters.",
          location: "password",
        }
      }

      if (password.length > 12) {
        error = {
          errorType: "validationError",
          message: "Password should not be longer than 12 charachters.",
          location: "password",
        }
      }

      if (!username || username.length < 5) {
        error = {
          errorType: "validationError",
          message: "Username should contain at least 5 characters.",
          location: "username",
        }
      }

      if (username.length > 12) {
        error = {
          errorType: "validationError",
          message: "Username should not be longer than 12 charachters.",
          location: "username",
        }
      }

      if (error) return error

      // ----------

      await client.connect()

      const hash = bcrypt.hashSync(password, 7)

      const newUser = {
        username,
        hashPassword: hash,
        dateOfRegistration: new Date().toLocaleString("ru-RU", {
          timeZone: "Europe/Moscow",
        }),
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
