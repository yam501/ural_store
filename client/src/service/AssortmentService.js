import { $authHost} from "../http";

const AssortmentService =  {
    async create(formData){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/createProduct', formData)))
    },

    async deleteOneByName(name){
        return new Promise((resolve) => resolve($authHost.post('api/assortment/deleteProductByName', {name})))
    }

    // async logout(){
    //     return new Promise((resolve) => resolve($authHost.post('api/user/logout')))
    // }
} 

export default AssortmentService;