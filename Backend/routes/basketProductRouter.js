const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const authMiddleware = require('../middleware/AuthMiddleware')
const basketProductController = require('../controllers/basketProductController')

router.post('/createBasketProduct', authMiddleware, activatedMiddleware, basketProductController.createBasketProduct)

router.get('/getAllBasketProductsByBasketID', authMiddleware, activatedMiddleware, basketProductController.getAllBasketProductsByBasketID)

router.delete('/deleteAllBasketProductsByBasketID', authMiddleware, activatedMiddleware, basketProductController.deleteAllBasketProductsByBasketID)
router.delete('/deleteOneBasketProductByBasketIDAndAssortmentID', authMiddleware, activatedMiddleware, basketProductController.deleteOneBasketProductByBasketIDAndAssortmentID)

router.put('/changeMoreOrLessByBasketIDAndAssortmentID', authMiddleware, activatedMiddleware, basketProductController.changeMoreOrLessByBasketIDAndAssortmentID)
router.put('/changeCountByBasketIDAndAssortmentID', authMiddleware, activatedMiddleware, basketProductController.changeCountByBasketIDAndAssortmentID)

module.exports = router