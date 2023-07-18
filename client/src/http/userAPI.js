import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async(number, password) => {
    const {data} = await $host.post('api/user/registration', {name:'Vasya', number, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(number, password) => {
    const {data} = await $host.post('api/user/login', {number, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}



export const checkCode = async(number, code) => {
    const {data} = await $host.put('api/user/checkCode', {number, code})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const sendCode = async(number) => {
    const {data} = await $host.put('api/user/sendCode',{number})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}