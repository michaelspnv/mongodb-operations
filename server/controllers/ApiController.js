const ApiService = require("../services/ApiService")

module.exports = class ApiController {
  static async getMovies(req, res) {
    try {
      const response = await ApiService.getMovies()

      res.json(response)
    } catch (error) {
      console.log(error)
    }
  }
}
