const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')


class BasketController {
    async createBasket(req, res, next) {
        try {
            const {userId, aprox_sum} = req.body
            const basket = await Basket.create({userId, aprox_sum})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasketByUserID(req, res, next) {
        try {
            const {userId} = req.body
            const basket = await Basket.findOne({where:{userId: userId}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasketByBasketID(req, res, next) {
        try {
            const {id} = req.body
            const basket = await Basket.findOne({where:{id: id}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async changeSumByBasketID(req, res, next) {
        try {
            const {aprox_sum, id} = req.body
            const updated = await Basket.update({aprox_sum: aprox_sum}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeSumByUserID(req, res, next) {
        try {
            const {aprox_sum, userId} = req.body
            const updated = await Basket.update({aprox_sum: aprox_sum}, {where: {userId: userId}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController()