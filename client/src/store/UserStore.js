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

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
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
            console.log(response)
            this.setIsAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkCode(number, code) {
        try {
            const response = await $authHost.put(`${process.env.REACT_APP_API_URL}api/user/activate`, { number, code })
            localStorage.setItem('token', response.data.accessToken);
            this.setIsAuth(true)
            this.setUser(response.data.user)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async sendCode(number) {
        return await $host.put(`${process.env.REACT_APP_API_URL}api/user/sendCode`, { number })
    }
    // get isAuth() {
    //     return this._isAuth 
    // }
    // get user() {
    //     return this._user
    // }
}