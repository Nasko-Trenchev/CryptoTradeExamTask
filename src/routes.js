const homeController = require('./controllers/homeController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/404', homeController.getErrorPage);
router.get('/search', homeController.getSearchPage);

module.exports = router;