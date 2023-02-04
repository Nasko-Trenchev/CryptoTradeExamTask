const handlebars = require('express-handlebars');
const path = require('path')

function setupViewEngine(app) {

    app.engine('hbs', handlebars.engine({
       extname: 'hbs'
    }))
    app.set('view engine', 'hbs')
    app.set('view', path.join(__dirname, '../views'))
}

module.exports = setupViewEngine;