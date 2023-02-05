const express = require('express');

const config = require('./config');
const cookieParser = require('cookie-parser');
const setupViewEngine = require('./config/viewEngine');
const routs = require('./routes');
const authMiddleware = require('./middlewares/authMiddleware')
const initDatabase = require('./config/databaseInit');


const app = express();

setupViewEngine(app);

app.use(express.static("src/static"))
app.use(cookieParser());
app.use(express.urlencoded({extended : false}));
app.use(authMiddleware.authentication);
app.use(routs);

initDatabase()
.then(app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`)))
.catch((err) => console.log(err.message));
