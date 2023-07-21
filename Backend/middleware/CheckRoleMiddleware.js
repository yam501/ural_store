const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')
const tokenController = require('../controllers/tokenController')

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asdfdsgksld
            if (!token) {
                return next(ApiError.unauthorized())
            }
            const decoded = tokenController.validateAccessToken(token)
            if (!decoded || decoded.role !== role) {
                return next(ApiError.forbidden())
            }
            req.user = decoded
            next()
        } catch (e) {
            return next(ApiError.forbidden())
        }
    }
}






