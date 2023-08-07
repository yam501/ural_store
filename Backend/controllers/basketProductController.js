const ApiError = require('../error/ApiError')
const { BasketProduct, Assortment } = require('../models/models')
const basketController = require('./basketController')


class BasketProductController {
    async createBasketProduct(req, res, next) {
        try {
            const { basketId, assortmentId, count, moreOrLess } = req.body
            const product = await Assortment.findOne({ where: { id: assortmentId } })
            const costPerOne = product['costPerOne']
            const basketProductOld = await BasketProduct.findOne({ where: { basketId: basketId, assortmentId: assortmentId } })
            if (basketProductOld) {
                await BasketProduct.update({ count: count + basketProductOld.count }, { where: { basketId: basketId, assortmentId: assortmentId } })
                basketController.updateSum(basketId)
                return res.json(await BasketProduct.findOne({ where: { basketId: basketId, assortmentId: assortmentId } }))
            }
            const basketProduct = await BasketProduct.create({ basketId, assortmentId, count, costPerOne, moreOrLess })
            basketController.updateSum(basketId)
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const { basketId } = req.body
            const basketProduct = await BasketProduct.findAll({ where: { basketId: basketId } })
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {
        try {
            const { basketId } = req.body
            const deleted = await BasketProduct.destroy({ where: { basketId: basketId } })
            basketController.updateSum(basketId)
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOneBasketProductByBasketIDAndAssortmentID(req, res, next) {
        try {
            const { basketId, assortmentId } = req.body
            const deleted = await BasketProduct.destroy({ where: { basketId: basketId, assortmentId: assortmentId } })
            basketController.updateSum(basketId)
            return res.json(deleted)
        } catch (error) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeMoreOrLessByBasketIDAndAssortmentID(req, res, next) {
        try {
            const { basketId, assortmentId, moreOrLess } = req.body
            const updated = await BasketProduct.update({ moreOrLess: moreOrLess }, { where: { basketId: basketId, assortmentId: assortmentId } })
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCountByBasketIDAndAssortmentID(req, res, next) {
        try {
            const { basketId, assortmentId, count } = req.body
            const updated = await BasketProduct.update({ count: count }, { where: { basketId: basketId, assortmentId: assortmentId } })
            basketController.updateSum(basketId)
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketProductController()