const { Router }        = require('express');
const router            = Router();
const { 
    renderSignUpForm,
    signUp,
    renderSignInForm, 
    signIn
}                       = require('../controllers/users.controllers');

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signIn);

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signUp);

module.exports = router;