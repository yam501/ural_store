// const { where } = require('sequelize')
const ApiError = require('../error/ApiError')
const {User} = require('../models/models')

class UserRouter {
    async createUser(req, res) {

    }


    async getUserByNumber(req, res, next) {
        try {
            const {number} = req.body
            const user = await User.findOne({where:{number}})
            return res.json(user)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getUserByUserID(req, res, next) {
        try {
            const {id} = req.body
            const user = await User.findOne({where:{id}})
            return res.json(user)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

    async changeDefaultAdressByNumber(req, res) {

    }

    async changeNumberByNumber(req, res) {

    }

    async changeNameByNumber(req, res) {

    }
}

module.exports = new UserRouter()