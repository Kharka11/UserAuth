const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/dashboard', userController.getdashboard);
router.get('/foods', userController.getAllFoods);

module.exports = router;