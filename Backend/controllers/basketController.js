const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')


class BasketController {
    async createBasket(req, res, next) {
        try {
            const {id_user, aprox_sum} = req.body
            const basket = await Basket.create({id_user, aprox_sum})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasketByUserID(req, res, next) {
        try {
            const {id_user} = req.body
            const basket = await Basket.findOne({where:{id_user: id_user}})
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
            const {aprox_sum, id} = req.body
            const updated = await Basket.update({aprox_sum: aprox_sum}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController()