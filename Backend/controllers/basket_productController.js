const ApiError = require('../error/ApiError')
const {Basket_Product} = require('../models/models')


class BasketProductController {
    async createBasketProduct(req, res, next) {
        try {
            const {basketId, assortmentId, count, more_or_less} = req.body
            const basketProduct = await Basket_Product.create({basketId, assortmentId, count, more_or_less})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const {basketId} = req.body
            const basketProduct = await Basket_Product.findOne({where:{basketId: basketId}})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {
        try {
            const {basketId} = req.body
            const deleted = await Basket_Product.destroy({where: {basketId: basketId}})
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeMoreOrLessByBasketID(req, res, next) {
        try {
            const {basketId, more_or_less} = req.body
            const updated = await Basket_Product.update({more_or_less: more_or_less}, {where: {basketId: basketId}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCountByBasketID(req, res, next) {
        try {
            const {basketId, count} = req.body
            const updated = await Basket_Product.update({count: count}, {where: {basketId: basketId}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketProductController()