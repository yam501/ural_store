import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../service/AuthService";
import axios from "axios";
import { $authHost, $host } from "../http";


export default class UserStore {

    constructor() {
        this._isAuth = false
        this._user = new IUser()
        makeAutoObservable(this)
    }

    setIsActivated(bool) {
        this._user.isActivated = bool
    }

    setDefaultAdress(adress) {
        this._user.defaultAddress = adress
    }

    setNumber(number) {
        this._user.number = number
    }

    setName(name) {
        this._user.name = name
    }

    setPassword(password) {
        this._user.password = password
    }

    setAll(defaultAddress, number, name) {
        this._user.defaultAddress = defaultAddress
        this._user.number = number
        this._user.name = name
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    async changeDefaultAddressByNumber(defaultAddress, number) {
        const response = await AuthService.changeDefaultAddressByNumber(defaultAddress, number);
        this.setDefaultAdress(defaultAddress)
    }

    async changeIsActivatedByNumber(number, isActivated) {
        const response = await AuthService.changeIsActivatedByNumber(number, isActivated);
        this.setIsActivated(isActivated)
    }

    async changeDefaultAddressById(defaultAddress, id) {
        const response = await AuthService.changeDefaultAddressById(defaultAddress, id)
        this.setDefaultAdress(defaultAddress)
    }

    async changeNumberById(number, id) {
        const response = await AuthService.changeNumberById(number, id)
        this.setNumber(number)
    }

    async changeNameById(name, id) {
        const response = await AuthService.changeNameById(name, id)
        this.setName(name)
    }

    async changeNumberAndNameById(number, name, id) {
        const response = await AuthService.changeNumberAndNameById(number, name, id)
        this.setNumber(number)
        this.setName(name)
    }

    async changeAllById(defaultAddress, number, name, id) {
        const response = await AuthService.changeAllById(defaultAddress, number, name, id)
        this.setAll(defaultAddress, number, name)
    }

    async changePasswordByNumber(number, password) {
        const response = await AuthService.changePasswordByNumber(number, password);
        this.setPassword(password)
    }
    
    async login(number, password) {
        try {
            const response = await AuthService.login(number, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(number, password) {
        try {
            const response = await AuthService.registration(number, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setIsAuth(false)
            this.setUser(new IUser())
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}api/user/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkCode(number, code) {
        try {
            const response = await $host.put(`${process.env.REACT_APP_API_URL}api/user/activate`, { number, code })
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkCodeForRecovPassword(number, code) {
        const response = await AuthService.cheackCode(number, code)
        return response;
    }

    async sendCode(number) {
        const response = await $host.put(`${process.env.REACT_APP_API_URL}api/user/sendCode`, { number })
        return response
    }
    // get isAuth() {
    //     return this._isAuth 
    // }
    // get user() {
    //     return this._user
    // }
}