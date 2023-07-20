import { $authHost, $host } from "../http";

export default class AuthService {
    async login(number, password){
        return new Promise(() => $host.post('api/user/login', {number, password}))
    }

    async registration(number, password){
        return new Promise(() => $host.post('api/user/registration', {number, password}))
    }

    async logout(){
        return new Promise(() => $authHost.post('api/user/logout'))
    }
}