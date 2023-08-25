import { makeAutoObservable } from "mobx";
import UseService from "../service/UseService";


export default class UseStore {
    constructor() {
        this._users = []
        makeAutoObservable(this)
    }

    setUsers(users) {
        this._users = users
    }

    async getAll() {
        const response = await UseService.fetchUsers()
        this.setUsers(response.data)
    }


    get users() {
        return this._users
    }
}