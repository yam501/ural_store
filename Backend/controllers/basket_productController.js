const ApiError = require('../error/ApiError')
const {Basket_Product, Assortment} = require('../models/models')
const basketController = require('./basketController')


class BasketProductController {
    async createBasketProduct(req, res, next) {
        try {
            const {basketId, assortmentId, count, more_or_less} = req.body
            const product = await Assortment.findOne({where: {id: assortmentId}})
            const cost_per_one = product['cost_per_one']
            const basketProduct = await Basket_Product.create({basketId, assortmentId, count, cost_per_one, more_or_less})
            basketController.updateSum(basketId)
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const {basketId} = req.body
            const basketProduct = await Basket_Product.findAll({where:{basketId: basketId}})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {
        try {
            const {basketId} = req.body
            const deleted = await Basket_Product.destroy({where: {basketId: basketId}})
            basketController.updateSum(basketId)
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOneBasketProductByBasketIDAndAssortmentID(req, res, next) {
        try {
            const {basketId, assortmentId} = req.body
            const deleted = await Basket_Product.destroy({where: {basketId: basketId, assortmentId: assortmentId}})
            basketController.updateSum(basketId)
            return res.json(deleted)
        } catch (error) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeMoreOrLessByBasketIDAndAssortmentID(req, res, next) {
        try {
            const {basketId, assortmentId, more_or_less} = req.body
            const updated = await Basket_Product.update({more_or_less: more_or_less}, {where: {basketId: basketId, assortmentId: assortmentId}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCountByBasketIDAndAssortmentID(req, res, next) {
        try {
            const {basketId, assortmentId, count} = req.body
            const updated = await Basket_Product.update({count: count}, {where: {basketId: basketId, assortmentId: assortmentId}})
            basketController.updateSum(basketId)
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketProductController()