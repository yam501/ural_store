import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [
            { id: 1, type: 'Мясной', name: 'Говядина', available: false, costPerOne: 1, composition: ' ', img: ' ' },
            { id: 2, type: 'Мясной', name: 'Свинина', abailable: true, costPerOne: 1,  composition: ' ', img: ' ' },
            { id: 3, type: 'Салаты', name: 'Оливье', available: true, costPerOne: 1, composition: ' ',img: ' ' },
            { id: 4, type: 'Овощи', name: 'Помидор', available: true, costPerOne: 1, composition: ' ', img: ' ' },
            { id: 5, type: 'Выпечка', name: 'Московская плюшка', available: true, costPerOne: 1, composition: ' ', img: ' ' },
            { id: 6, type: 'Молочка', name: 'Молоко', weight: '1', available: true, costPerOne: 1, composition: ' ', img: ' ' },
            { id: 7, type: 'Выпечка', name: 'Красный бархат', available: true, costPerOne: 1, composition: ' ', img: ' ' }
        ]
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    get products() {
        return this._products
    }
}