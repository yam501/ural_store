const ApiError = require('../error/ApiError')
const {Assortment} = require('../models/models')

class AssortmentController {
    async create(req, res, next) {
        try {
            const {type, name, available, cost_per_one, description} = req.body
            const assortment = await Assortment.create({type, name, available, cost_per_one, description})
            return res.json(assortment)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOneByName(req, res, next) {
        try {
            const {name} = req.body
            const assortment = await Assortment.findOne({where:{name: name}})
            return res.json(assortment)
        } catch(error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllByType(req, res, next) {
        try {
            const {type} = req.body
            const assortment = await Assortment.findAll({where:{type: type}})
            return res.json(assortment)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async deleteOneByName(req, res, next) {
        try {
            const {name} = req.body
            const deleted = await Assortment.destroy({where:{name: name}})
            return res.json(deleted)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeNameByName(req, res, next) {
        try {
            const {old_name, new_name} = req.body
            const updated = await Assortment.update({name: new_name}, {where: {name: old_name}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeAvailableByName(req, res, next) {
        try {
            const {available, name} = req.body
            const updated = await Assortment.update({available: available}, {where: {name: name}})
            return res.json(updated) 
        } catch (error) {
           next(ApiError.badRequest(error.message)) 
        }
    }

    async changeCostPerOneByName(req, res, next) {
        try {
            const {cost_per_one, name} = req.body
            const updated = await Assortment.update({cost_per_one: cost_per_one}, {where: {name: name}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeDescriptionByName(req, res, next) {
        try {
            const {description, name} = req.body
            const updated = await Assortment.update({description: description}, {where: {name: name}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeImageByName(req, res, next) {
        try {
            const {image, name} = req.body
            const updated = await Assortment.update({image: image}, {where: {name: name}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }        
    }
}

module.exports = new AssortmentController()