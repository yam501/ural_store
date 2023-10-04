const ApiError = require('../error/ApiError')
const {ComplitedOrders, ComplitedOrderProduct} = require('../models/models')
const basketProductController = require('./basketProductController')

class ComplitedOrdersController {

    //Объединенные методы

    async repeatOrderByComplitedOrderIdAndBasketId(req, res, next) {
        try {
            const {complitedOrderId, basketId} = req.body
            const complitedOrderProducts = await ComplitedOrderProduct.findAll({where: {complitedOrderId: complitedOrderId}})
            complitedOrderProducts.forEach(complitedOrderProduct => {
                basketProductController.createBasketProductFromBack(basketId, complitedOrderProduct['assortmentId'], 
                    complitedOrderProduct['count'], complitedOrderProduct['moreOrLess'], next)
            })
            return res.json({"Результат": "Готова"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    //

    async createComplitedOrder(req, res, next) {
        try {
            const {userId, address, complitedSum, orderTime, complitedTime} = req.body
            const complitedOrder = await ComplitedOrders.create({userId, address, complitedSum, orderTime, complitedTime})
            return res.json(complitedOrder)
            
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllComplitedOrdersByUserID(req, res, next) {
        try {
            let  {userId,limit, page} = req.body
            page = page || 1
            limit = limit || 5
            let offset = page * limit - limit
    
            const complitedOrders = await ComplitedOrders.findAndCountAll({where:{userId: userId},limit, offset})
            return res.json(complitedOrders)
            

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getComplitedOrderByComplitedOrderID(req, res, next) {
        try {
            const {id} = req.body
            const complitedOrder = await ComplitedOrders.findOne({where:{id: id}})
            return res.json(complitedOrder)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ComplitedOrdersController()