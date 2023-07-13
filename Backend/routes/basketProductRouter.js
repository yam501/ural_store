const Router = require('express')
const router = new Router()
const basketProductController = require('../controllers/basketProductController')

router.post('/createBasketProduct', basketProductController.createBasketProduct)

router.get('/getAllBasketProductsByBasketID', basketProductController.getAllBasketProductsByBasketID)

router.delete('/deleteAllBasketProductsByBasketID', basketProductController.deleteAllBasketProductsByBasketID)
router.delete('/deleteOneBasketProductByBasketIDAndAssortmentID', basketProductController.deleteOneBasketProductByBasketIDAndAssortmentID)

router.put('/changeMoreOrLessByBasketIDAndAssortmentID', basketProductController.changeMoreOrLessByBasketIDAndAssortmentID)
router.put('/changeCountByBasketIDAndAssortmentID', basketProductController.changeCountByBasketIDAndAssortmentID)

module.exports = router