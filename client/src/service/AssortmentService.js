import { $authHost, $host  } from "../http";

const AssortmentService =  {
    async create(formData){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/createProduct', formData)))
    },

    async deleteOneByName(name){
        return new Promise((resolve) => resolve($authHost.delete('api/assortment/deleteProductByName', {name})))
    },

    async getAllByTypeAndAvailable(type){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByTypeAndAvailable', {type, available: true})))
    },

    async getAllByTypeAndAvailable(type,available){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/getAllProductsByTypeAndAvailable', {type, available})))
    }

    // async logout(){
    //     return new Promise((resolve) => resolve($authHost.post('api/user/logout')))
    // }
} 

export default AssortmentService;