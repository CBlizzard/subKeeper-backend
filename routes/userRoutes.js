const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')

router.post('/signup', controller.signupUser)
router.post('/login', controller.loginUser)

module.exports = router;