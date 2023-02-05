
exports.getHomePage = (req, res) => {

    res.render("home");
}

exports.getErrorPage = (req, res) => {

    res.render('404');
}

exports.getSearchPage = (req, res) =>{

    res.render('search');
}