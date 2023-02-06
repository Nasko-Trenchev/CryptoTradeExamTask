const homeController = require('./controllers/homeController');
const cryptoController = require('./controllers/cryptoController');
const authController = require('./controllers/authController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);
router.get('/search', homeController.getSearchPage);

router.get('/catalog', cryptoController.getCatalog);
router.get('/catalog/:id', cryptoController.getDetails);
router.get('/buy/:id', cryptoController.buyPage);
router.get('/edit/:id', cryptoController.getEditPage);
router.post('/edit/:id', cryptoController.postEditPage);
router.get('/delete/:id', cryptoController.deletePage);


router.get('/create', cryptoController.getCreatePage);
router.post('/create', cryptoController.postCreatePage);

router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.logoutPage);

module.exports = router;