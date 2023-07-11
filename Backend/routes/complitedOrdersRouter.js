const Router = require('express')
const router = new Router()
const complitedOrdersController = require('../controllers/complitedOrdersController')

router.post('/createComplitedOrder', complitedOrdersController.createComplitedOrder)

router.get('/getComplitedOrderByUserID', complitedOrdersController.getComplitedOrderByUserID)
router.get('/getComplitedOrderByComplitedOrderID', complitedOrdersController.getComplitedOrderByComplitedOrderID)

module.exports = router