const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscriptionController')


router.get('/', controller.getSubscription)
router.post('/', controller.createSubscription)
router.patch('/:id', controller.updateSubscription)
router.delete('/:id', controller.deleteSubscription)

module.exports = router;