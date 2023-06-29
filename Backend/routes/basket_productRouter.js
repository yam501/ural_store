const Router = require('express')
const router = new Router()
const basket_productController = require('../controllers/basket_productController')

router.post('/setBasketProduct', basket_productController.set)
router.get('/getBasketProduct', basket_productController.getByBasketID)
router.delete('/deleteBasketProduct', basket_productController.deleteByBasketID)

module.exports = router