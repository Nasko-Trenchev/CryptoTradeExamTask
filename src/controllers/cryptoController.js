const cryptoService = require('../services/cryptoService');

exports.getCatalog = (req, res) =>{

    res.render('catalog');
}

exports.getDetails = (req, res) =>{

    res.render('details', );
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {name, image, price, description, method} = req.query;
    const owner = "Gosho";
    const user = "Pesho"

    const crypto = await cryptoService.createOffer({name, image, price, description, method, user, owner});
    res.redirect('/');
}