const Router = require('express')
const router = new Router()
const feedbackController = require('../controllers/feedbackController')

router.post('/sendFeedback', feedbackController.sendFeedback)

router.get('/getFeedbackOfType', feedbackController.getFeedbackOfType)
router.get('/getAllFeedback', feedbackController.getAllFeedback)

router.delete('/destroyFeedback', feedbackController.destroyFeedback)


module.exports = router
