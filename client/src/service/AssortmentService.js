import { $authHost, $host  } from "../http";

const AssortmentService =  {
    async create(formData){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/createProduct', formData)))
    },




    async deleteOneByName(name){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/deleteProductByName', {name})))
    },
    



    async getAll(){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAll')))
    },

    async getAllByName(name){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllByProductByName', {name})))
    },
    
    async getAllByType(type){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByType', {type})))
    },

    async getAllByAvailable(available){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByAvailable', {available})))
    },

    async getAllByTypeAndAvailable(type, available){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByTypeAndAvailable', {type, available})))
    }
} 

export default AssortmentService;