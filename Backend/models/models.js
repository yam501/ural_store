const sequelize = require('../db')
const { DataTypes } = require('sequelize')

//Описание таблиц

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false, unique: true},
    defualt_adress: { type: DataTypes.STRING, allowNull: true },
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    aprox_sum: {type: DataTypes.DOUBLE, allowNull: false },
    userId: {type: DataTypes.INTEGER, allowNull: false, unique: true}
})

const Basket_Product = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    basketId: { type: DataTypes.INTEGER, allowNull: false },
    assortmentId: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.DOUBLE, allowNull: false },
    cost_per_one: {type: DataTypes.DOUBLE, allowNull: false },
    more_or_less: {type: DataTypes.BOOLEAN, allowNull: false }
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    adress: { type: DataTypes.STRING, allowNull: false },
    aprox_sum: {type: DataTypes.DOUBLE, allowNull: false }
})

const Completed_Orders = sequelize.define('complited_orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    adress: { type: DataTypes.STRING, allowNull: false },
    complited_sum: {type: DataTypes.DOUBLE, allowNull: false },
    order_time: {type: DataTypes.TIME, allowNull: false },
    complited_time: {type: DataTypes.TIME, allowNull: false }
})

const Order_Product = sequelize.define('order_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    orderId: { type: DataTypes.INTEGER, allowNull: false },
    assortmentId: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.DOUBLE, allowNull: false },
    more_or_less: {type: DataTypes.BOOLEAN, allowNull: false }
})

const Complited_Order_Product = sequelize.define('complited_order_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    complitedOrderId: { type: DataTypes.INTEGER, allowNull: false },
    assortmentId: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.DOUBLE, allowNull: false }
})

const Assortment = sequelize.define('assortment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, allowNull: false},
    name: { type: DataTypes.STRING, allowNull: false },
    available: {type: DataTypes.BOOLEAN, allowNull: false },
    cost_per_one: {type: DataTypes.DOUBLE, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    composition: { type: DataTypes.STRING, allowNull: true },
    image: {type: DataTypes.STRING, allowNull: true}
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

User.hasMany(Completed_Orders)
Completed_Orders.belongsTo(User)

Completed_Orders.hasMany(Complited_Order_Product)
Complited_Order_Product.belongsTo(Completed_Orders)

module.exports = {
    User, Basket, Basket_Product, Order, Order_Product, Assortment, Completed_Orders, Complited_Order_Product
}
