//Подключение к окружению
require('dotenv').config()
//Подключение фреймворка
const express = require('express')
//Подключение к бд
const sequelize = require('./db')
//Инициализация бд
const models = require('./models/models')

//Инициализация порта
const PORT = process.env.PORT || 5000
//Объект приложения
const app = express()

//Запуск сервера
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
