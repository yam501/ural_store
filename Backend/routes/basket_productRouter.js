const Router = require('express')
const router = new Router()
const basket_productController = require('../controllers/basket_productController')

router.post('/createBasketProduct', basket_productController.createBasketProduct)
router.get('/getAllBasketProductsByBasketID/:id_basket', basket_productController.getAllBasketProductsByBasketID)
router.delete('/DeleteAllBasketProductsByBasketID/:id_basket', basket_productController.deleteAllBasketProductsByBasketID)
router.put('/changeMoreOrLessByBasketID/:id_basket', basket_productController.changeMoreOrLessByBasketID)
router.put('/changeCountByBasketID/:id_basket', basket_productController.changeCountByBasketID)

module.exports = router