const Router = require('express')
const router = new Router()
const complited_ordersController = require('../controllers/complited_ordersController')

router.post('/createComplitedOrder', complited_ordersController.createComplitedOrder)

router.get('/getComplitedOrderByUserID', complited_ordersController.getComplitedOrderByUserID)
router.get('/getComplitedOrderByComplitedOrderID', complited_ordersController.getComplitedOrderByComplitedOrderID)

module.exports = router