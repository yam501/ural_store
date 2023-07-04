const ApiError = require('../error/ApiError')
const {Assortment} = require('../models/models')

class AssortmentController {
    async create(req, res, next) {
        try {
            const {type, name, available, cost_per_one, description} = req.body
            const assortment = await Assortment.create({type, name, available, cost_per_one, description})
            return res.json(assortment)
        } catch (e) {N
            next(ApiError.badRequest(er.message))
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
            const deleted = await Assortment.destroy({where:{name: name}})
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
    }ss

    async changeAvailableByName(req, res, next) {
        try {
            const {name, available} = req.body
            const updated = await Assortment.update({available: available}, {where: {name: name}})
            return res.json(updated) 
        } catch (e) {
           next(ApiError.badRequest(e.message)) 
        }
    }

    async changeCostPerOneByName(req, res, next) {
        try {
            const {name, cost_per_one} = req.body
            const updated = await Assortment.update({cost_per_one: cost_per_one}, {where: {name: name}})
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