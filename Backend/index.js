require('dotenv').config() //Подключение к окружению
const express = require('express') //Подключение фреймворка
const sequelize = require('./db')  //Подключение к бд
const models = require('./models/models') //Инициализация бд
const cors = require('cors') //Импорт cors
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000 //Инициализация порта
const app = express() //Объект приложения
const errorHandler = require('./middleware/ErrorHandlingMiddleware') //Инициализация еррорхендлера
const path = require('path')




app.use(cors())
app.use(express.json())  //Это чтобы приложение могло парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, последний Middleware
//!!!РЕГИСТРИРУЕТСЯ ОБЯЗАТЕЛЬНО В САМОМ КОНЦЕ!!!
app.use(errorHandler)

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
