const express = require('express');

const config = require('./config');
const setupViewEngine = require('./config/viewEngine');
const routs = require('./routes');


const app = express();

setupViewEngine(app);

app.use(express.static("src/static"))
app.use(express.urlencoded({extended : false}));
app.use(routs);


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));