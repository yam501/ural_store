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
    }
} 

export default AuthService;