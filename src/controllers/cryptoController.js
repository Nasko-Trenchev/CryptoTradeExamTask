const cryptoService = require('../services/cryptoService');
const cryptoUtils = require('../utils/CryptoUtils'); 

exports.getCatalog = async (req, res) =>{

    const crypto = await cryptoService.allOffers().lean();
    res.render('catalog', {crypto});
}

exports.getDetails = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id).lean()
    
    res.render('details', {crypto});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {name, image, price, description, method} = req.body;
    const owner = req.user._id;
    const user = req.user._id;

    const crypto = await cryptoService.createOffer({name, image, price, description, method, user, owner});
    res.redirect('/');
}