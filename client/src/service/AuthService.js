import { $authHost, $host } from "../http";

const AuthService =  {  
    async login(number, password){
        return new Promise((resolve) => resolve($authHost.post('api/user/login', {number, password})))
    },

    async registration(number, password){
        return new Promise((resolve) => resolve($authHost.post('api/user/registration', {number, password})))
    },

    async logout(){
        return new Promise((resolve) => resolve($authHost.post('api/user/logout')))
    },

    async changeDefaultAddressByNumber(defaultAddress, number) {
        return new Promise((resolve) => resolve($authHost.put('api/user/changeDefaultAddressByNumber', {defaultAddress, number})))
    }
} 

export default AuthService;