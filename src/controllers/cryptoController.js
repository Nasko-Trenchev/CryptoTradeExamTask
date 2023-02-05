

exports.getCatalog = (req, res) =>{

    res.render('catalog');
}

exports.getDetails = (req, res) =>{

    res.render('details', );
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = (req, res) =>{

    res.redirect('/');
}