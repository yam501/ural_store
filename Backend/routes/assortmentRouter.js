const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController') 

router.post('/createProduct', assortmentController.create)

router.get('/getProductByName', assortmentController.getOneByName)
router.get('/getAllProductsByType', assortmentController.getAllByType)

router.delete('/deleteProductByName', assortmentController.deleteOneByName)

router.put('/changeProductNameByName', assortmentController.changeNameByName)
router.put('/changeProductAvailableByName', assortmentController.changeAvailableByName)
router.put('/changeProductCostPerOneByName', assortmentController.changeCostPerOneByName)
router.put('/changeProductDescriptionByName', assortmentController.changeDescriptionByName)
router.put('/changeProductImageByName', assortmentController.changeImageByName)

module.exports = router