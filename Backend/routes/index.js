const Router = require('express')
const router = new Router()
const assortmentRouter = require('./assortmentRouter')
const basket_productRouter = require('./basket_productRouter')
const basketRouter = require('./basketRouter')
const order_productRouter = require('./order_productRouter')
const orderRouter = require('./orderRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/basket', basketRouter)
router.use('/order', orderRouter)
router.use('/basket_product', basket_productRouter)
router.use('/order_product', order_productRouter)
router.use('/assortment', assortmentRouter)

module.exports = router