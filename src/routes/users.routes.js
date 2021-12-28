const { Router }        = require('express');
const router            = Router();
const { 
    renderSignUpForm,
    signUp,
    renderSignInForm, 
    signIn,
    renderSubs, 
    createCheckoutSession,
    webhookPost,
    webhookGet,
    config,
    page404,
    confirmPost,
    myAccount
}                       = require('../controllers/users.controllers');
const {
    isAuthenticated
}                   = require('../helpers/auth');

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', signIn);

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signUp);

router.get('/users/confirmation/:token', confirmPost);

router.get('/users/myAccount', isAuthenticated, myAccount);

//Payment
router.get('/users/select-subscription/:id', renderSubs);
router.post('/create-checkout-session/:id', createCheckoutSession);
router.post("/webhook", webhookPost);
router.get("/checkout-session", webhookGet);
router.get("/config", config);

router.use(page404);

module.exports = router;