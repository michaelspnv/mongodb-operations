const AuthService = require("../services/AuthService.js")

module.exports = class AuthController {
  static async register(req, res) {
    try {
      const response = await AuthService.register(req.body)

      res.json(response)
    } catch (error) {
      console.log(error)
      res.sendStatus(400)
    }
  }

  static async login(req, res) {
    try {
      const response = await AuthService.login(req.body)

      res.json(response)
    } catch (error) {
      console.log(error)
      res.sendStatus(400)
    }
  }
}
