const homeController = require('./controllers/homeController');
const cryptoController = require('./controllers/cryptoController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);
router.get('/search', homeController.getSearchPage);

router.get('/catalog', cryptoController.getCatalog);
router.get('/catalog/details/:id', cryptoController.getDetails);

router.get('/create', cryptoController.getCreatePage);
router.post('/create', cryptoController.postCreatePage);

module.exports = router;