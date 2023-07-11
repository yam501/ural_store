const Router = require('express')
const router = new Router()
const complitedOrderProductController = require('../controllers/complitedOrderProductController')

router.post('/createComplitedOrderProduct', complitedOrderProductController.createComplitedOrderProduct)

router.get('/getComplitedOrderProductByComplitedOrderID', complitedOrderProductController.getComplitedOrderProductByComplitedOrderID)

module.exports = router