const Router = require('express')
const router = new Router()
const basket_productController = require('../controllers/basket_productController')

router.post('/createBasketProduct', basket_productController.createBasketProduct)

router.get('/getAllBasketProductsByBasketID', basket_productController.getAllBasketProductsByBasketID)

router.delete('/DeleteAllBasketProductsByBasketID', basket_productController.deleteAllBasketProductsByBasketID)

router.put('/changeMoreOrLessByBasketID', basket_productController.changeMoreOrLessByBasketID)
router.put('/changeCountByBasketID', basket_productController.changeCountByBasketID)

module.exports = router