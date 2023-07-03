const { where } = require('sequelize')
const ApiError = require('../error/ApiError')
const {User} = require('../models/models')

class UserRouter {
    async createUser(req, res) {

    }

    async getUserByNumber(req, res) {
        const {number} = req.params
        const user = await User.findOne({where:{number}})
        return res.json(user)
    }

    async getUserByUserID(req, res) {
        const {id} = req.params
        const user = await User.findOne({where:{id}})
        return res.json(user)

    }

    async changeDefaultAdressByNumber(req, res) {

    }

    async changeNumberByNumber(req, res) {

    }

    async changeNameByNumber(req, res) {

    }
}

module.exports = new UserRouter()