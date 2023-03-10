const jwt = require('../lib/jsonWebToken');
const config = require('../config')

exports.authentication = async (req, res, next) =>{

    const token = req.cookies['auth'];

    if(token){
        try {
        const decodedToken = await jwt.verify(token, config.SECRET)

        req.user = decodedToken;
        req.isAuthenticated = true;
        res.locals.username = decodedToken.username;
        res.locals.email = decodedToken.email;
        res.locals.isAuthenticated = true;
        }
        catch(err) {
            console.log(err.messsage);
            res.clearCookie('auth');
            res.redirect('404')
        }
    }
    next();
}

exports.isAuthenticate = (req, res, next) =>{

    if(!req.isAuthenticated) {
        return res.redirect('/login')
    };  
    next();
}