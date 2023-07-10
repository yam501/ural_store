const ApiError = require('../error/ApiError')
const {Assortment, Basket_Product, Basket} = require('../models/models')
const basketController = require('./basketController')
const path = require('path')


class AssortmentController {
    async create(req, res, next) {
        try {
            const {type, name, available, cost_per_one, description, composition} = req.body
            const {img} = req.files
            let fileName = name + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const assortment = await Assortment.create({type, name, available, cost_per_one, description, composition, image: fileName})
            return res.json(assortment)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOneByName(req, res, next) {
        try {
            const {name} = req.body
            const assortment = await Assortment.findOne({where:{name: name}})
            return res.json(assortment)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllByType(req, res, next) {
        try {
            const {type} = req.body
            const assortment = await Assortment.findAll({where:{type: type}})
            return res.json(assortment)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteOneByName(req, res, next) {
        try {
            const {name} = req.body
            const product = await Assortment.findOne({where: {name: name}})
            const deleted = await Assortment.destroy({where:{name: name}})
            await Basket_Product.destroy({where: {assortmentId: product['id']}})
            const updatedBaskets = await Basket.findAll()
            updatedBaskets.forEach(element => basketController.updateSum(element['id']))
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeNameByName(req, res, next) {
        try {
            const {oldName, newName} = req.body
            const updated = await Assortment.update({name: newName}, {where: {name: oldName}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeAvailableByName(req, res, next) {
        try {
            const {name, available} = req.body
            const updated = await Assortment.update({available: available}, {where: {name: name}})
            if (!available){
                const product = await Assortment.findOne({where: {name: name}})
                await Basket_Product.destroy({where: {assortmentId: product['id']}})
                const baskets = await Basket.findAll()
                baskets.forEach(element => basketController.updateSum(element['id']))
            }
            return res.json(updated) 
        } catch (e) {
           next(ApiError.badRequest(e.message)) 
        }
    }

    async changeCostPerOneByName(req, res, next) {
        try {
            const {name, cost_per_one} = req.body
            const product = await Assortment.findOne({where: {name: name}})
            const updated = await Assortment.update({cost_per_one: cost_per_one}, {where: {name: name}})
            await Basket_Product.update({cost_per_one: cost_per_one}, {where: {assortmentId: product['id']}})
            const baskets = await Basket.findAll()
            baskets.forEach(element => basketController.updateSum(element['id']))
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeDescriptionByName(req, res, next) {
        try {
            const {name, description} = req.body
            const updated = await Assortment.update({description: description}, {where: {name: name}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCompositionByName(req, res, next) {
        try {
            const {name, composition} = req.body
            const updated = await Assortment.update({composition: composition}, {where: {name: name}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async changeImageByName(req, res, next) {
        try {
            const {name, image} = req.body
            const updated = await Assortment.update({image: image}, {where: {name: name}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }        
    }
}

module.exports = new AssortmentController()