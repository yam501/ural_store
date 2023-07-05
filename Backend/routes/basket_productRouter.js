const Router = require('express')
const router = new Router()
const basket_productController = require('../controllers/basket_productController')

router.post('/createBasketProduct', basket_productController.createBasketProduct)

router.get('/getAllBasketProductsByBasketID', basket_productController.getAllBasketProductsByBasketID)

router.delete('/deleteAllBasketProductsByBasketID', basket_productController.deleteAllBasketProductsByBasketID)
router.delete('/deleteOneBasketProductByBasketIDAndAssortmentID', basket_productController.deleteOneBasketProductByBasketIDAndAssortmentID)

router.put('/changeMoreOrLessByBasketIDAndAssortmentID', basket_productController.changeMoreOrLessByBasketIDAndAssortmentID)
router.put('/changeCountByBasketIDAndAssortmentID', basket_productController.changeCountByBasketIDAndAssortmentID)

module.exports = router