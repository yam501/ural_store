const sequelize = require('../db')
const { DataTypes } = require('sequelize')

//Описание таблиц

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false, unique: true},
    defualt_adress: { type: DataTypes.STRING, allowNull: true },
    
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    aprox_sum: {type: DataTypes.DOUBLE, allowNull: false }
})

const Basket_Product = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_basket: { type: DataTypes.INTEGER, allowNull: false },
    id_product: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.DOUBLE, allowNull: false },
    more_or_less: {type: DataTypes.BOOLEAN, allowNull: false }
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    adress: { type: DataTypes.STRING, allowNull: false },
    aprox_sum: {type: DataTypes.DOUBLE, allowNull: false }
})

const Order_Product = sequelize.define('order_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_order: { type: DataTypes.INTEGER, allowNull: false },
    id_product: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.DOUBLE, allowNull: false },
    more_or_less: {type: DataTypes.BOOLEAN, allowNull: false }
})

const Assortment = sequelize.define('assortment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false},
    name: { type: DataTypes.STRING, allowNull: false },
    available: {type: DataTypes.BOOLEAN, allowNull: false },
    cost_per_one: {type: DataTypes.DOUBLE, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },

})


//Описание связей
User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_Product)
Basket_Product.belongsTo(Basket)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(Order_Product)
Order_Product.belongsTo(Order)

Assortment.hasMany(Basket_Product)
Basket_Product.belongsTo(Assortment)

Assortment.hasMany(Order_Product)
Order_Product.belongsTo(Assortment)

module.exports = {
    User, Basket, Basket_Product, Order, Order_Product, Assortment
}
