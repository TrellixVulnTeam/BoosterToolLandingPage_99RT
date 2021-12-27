const { Router }        = require('express');
const router            = Router();
const { 
    renderIndex, 
    renderAbout, 
    renderPolices, 
    renderHydrus
}                       = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/polices', renderPolices);

router.get('/hydrus', renderHydrus);

module.exports = router;