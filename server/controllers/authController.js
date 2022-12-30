const AuthService = require("../services/AuthService.js")

module.exports = class AuthController {
  static async register(req, res) {
    try {
      const response = await AuthService.register(req.body)

      res.json(response)
    } catch (e) {
      console.log(e)
      res.sendStatus(400)
    }
  }
}
