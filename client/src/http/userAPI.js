import { $authHost, $host } from "./index";

export const registration = async(number, password) => {
    const response = await $host.post('api/user/registration', {name:'Vasya', number, password})
    return response
}

export const login = async(number, password) => {
    const response = await $host.post('api/user/login', {number, password})
    return response
}

export const check = async() => {
    const response = await $authHost.get('api/user/login')
    return response
}



export const checkCode = async(number, code) => {
    const response = await $host.put('api/user/checkCode', {number, code})
    return response
}

export const sendCode = async(number) => {
    const response = await $host.put('api/user/sendCode',{number})
    return response
}