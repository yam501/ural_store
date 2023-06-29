//Подключение к окружению
require('dotenv').config()
//Подключение фреймворка
const express = require('express')
//Подключение к бд
const sequelize = require('./db')
//Инициализация бд
const models = require('./models/models')
//Импорт cors
const cors = require('cors')

const router = require('./routes/index')

//Инициализация порта
const PORT = process.env.PORT || 5000
//Объект приложения
const app = express()
app.use(cors())
//Это чтобы приложение могло парсить json формат
app.use(express.json())

app.use('/api', router)

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
