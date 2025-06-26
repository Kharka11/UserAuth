const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Root route 
router.get('/', (req, res) => {
    res.render('pages/landing');
});

//signup route
router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignUp);

//email verification route
router.get('/verify-email', authController.verifyEmail);

//login route
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

//forgot password route
router.get('/forgot-password', authController.getForgotPassword);
router.post('/forgot-password', authController.postForgotPassword);
router.get('/reset-password', authController.getForgotPassword);
router.post('/reset-password', authController.resetPassword);

//logout route
router.get('/logout', authController.logout);

router.get('/user/dashboard', authController.getResetPassword);
router.post('/user/dashboard', authController.resetPassword);

module.exports = router;