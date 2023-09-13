import { $authHost, $host } from "../http";

const AssortmentService = {
    async create(formData) {

        return new Promise((resolve) => resolve($authHost.post('api/assortment/createProduct', formData)))

    },




    async deleteOneByName(name) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/deleteProductByName', { name })))
    },




    async getAll() {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAll')))
    },

    async getById(id) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getOne', { id })))
    },

    async getAllByName(name) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllByProductByName', { name })))
    },

    async getAllByType(type) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByType', { type })))
    },

    async getAllByAvailable(available) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByAvailable', { available })))
    },

    async getAllByTypeAndAvailable(type, available) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByTypeAndAvailable', { type, available })))
    },

    async getAllByTypeAndName(type, name) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByTypeAndName', { type, name })))
    },

    async getAssortmentByIds(ids) {
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAssortmentByIds', { ids })))
    },



    async changeNameByName(oldName, newName) {
        return new Promise((resolve) => resolve($authHost.put('api/assortment/changeProductNameByName', { oldName, newName })))
    },
    async changeTypeByName(name, type) {
        return new Promise((resolve) => resolve($authHost.put('api/assortment/changeTypeByName', { type, name })))
    },
    async changeCostPerOneByName(name, costPerOne) {
        return new Promise((resolve) => resolve($authHost.put('api/assortment/changeProductCostPerOneByName', { name, costPerOne })))
    },
    async changeCompositionByName(name, composition) {
        return new Promise((resolve) => resolve($authHost.put('api/assortment/changeProductCompositionByName', { name, composition })))
    },
    async changeImageByName(formData) {
        return new Promise((resolve) => resolve($authHost.put('api/assortment/changeProductImageByName', formData)))
    },

    async changeAvailableByName(name) {
        try {
            return new Promise((resolve) => resolve($authHost.put('api/assortment/changeProductAvailableByName', { name })))

        } catch (error) {
            console.log(error)
        }
    }
}

export default AssortmentService;