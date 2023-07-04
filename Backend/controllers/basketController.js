const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')


class BasketController {
    async createBasket(req, res, next) {

    }

    async getBasketByUserID(req, res, next) {
        try {
            const {id_user} = req.body
            const basket = await Basket.findOne({where:{id_user}})
            return res.json(basket)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getBasketByBasketID(req, res, next) {
        try {
            const {id} = req.body
            const basket = await Basket.findOne({where:{id}})
            return res.json(basket)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async changeSumByBasketID(req, res, next) {

    }

    async changeSumByUserID(req, res, next) {
        
    }
}

module.exports = new BasketController()