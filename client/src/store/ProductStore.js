import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Мясо'},
            {id: 2, name: 'Салаты'},
            {id: 3, name: 'Выпечка'},
            {id: 4, name: 'Десерты'}
        ]

        this._products = [
            {id: 1, name: 'Говядина', weight: '1', price: '400'},
            {id: 2, name: 'Свинина', weight: '1', price: '400'},
            {id: 3, name: 'Оливье', weight: '1', price: '400'},
            {id: 4, name: 'Винегрет', weight: '1', price: '400'},
            {id: 5, name: 'Московская', weight: '1', price: '400'},
            {id: 6, name: 'Наполеон', weight: '1', price: '400'},
            {id: 7, name: 'Красный бархат', weight: '1', price: '400'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._isAuth = types
    }
    setProducts(products) {
        this.user = products
    }

    get types() {
        return this._types 
    }
    get products() {
        return this._products
    }
}