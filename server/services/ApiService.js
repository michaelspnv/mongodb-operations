const { MongoClient } = require("mongodb")
require("dotenv").config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const clusterUrl = process.env.MONGO_CLUSTER_URL
const authMechanism = process.env.MONGO_AUTH_MECHANISM

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`

const client = new MongoClient(uri)

module.exports = class ApiService {
  static async getMovies() {
    try {
      await client.connect()

      const movies = client
        .db("movie_app")
        .collection("movies")
        .find({ rating: { $lt: "7.0" } })
        .project({
          _id: 0,
          filmId: 1,
          countries: 1,
          genres: 1,
          nameEn: 1,
          nameRu: 1,
          posterUrl: 1,
          rating: 1,
          year: 1,
        })

      let result = []

      await movies.forEach((movie) => {
        result.push(movie)
      })

      return result
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  }
}
