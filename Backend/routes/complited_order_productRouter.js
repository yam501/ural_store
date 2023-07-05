const Router = require('express')
const router = new Router()
const complitedOrderProductController = require('../controllers/comlited_order_productController')

router.post('/createComplitedOrderProduct', complitedOrderProductController.createComplitedOrderProduct)

router.get('/getComplitedOrderProductByComplitedOrderID', complitedOrderProductController.getComplitedOrderProductByComplitedOrderID)

module.exports = router