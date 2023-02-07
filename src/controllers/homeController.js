const cryptoService = require('../services/cryptoService');

exports.getHomePage = async (req, res) => {

    const crypto = await cryptoService.allOffers().lean();
    res.render("home", {crypto});
}

exports.getErrorPage = (req, res) => {

    res.render('404');
}

exports.getSearchPage = async (req, res) =>{

    let crypto = await cryptoService.allOffers().lean();
    res.render('search', {crypto})
}

exports.postSearchPage = async (req, res) =>{

    const {search, method} = req.body;

    let crypto = await cryptoService.filterByPaymentMethod(method).lean();

    if(search){
        crypto = crypto.filter(x=> x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        return res.render(`search`, {crypto})
    }
    else {
        return res.render(`search`, {crypto})
    }
    res.render('search', {crypto})
}
