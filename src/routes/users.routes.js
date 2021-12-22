const { Router }        = require('express');
const router            = Router();
const { 
    renderSignUpForm,
    signUp,
    renderSignInForm
}                       = require('../controllers/users.controllers');

router.get('/users/signin', renderSignInForm);

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signUp);

module.exports = router;