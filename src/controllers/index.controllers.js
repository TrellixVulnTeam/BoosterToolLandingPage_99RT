const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about');
};

indexCtrl.renderPolices = (req, res) => {
    res.render('polices');
};

indexCtrl.renderHydrus = (req, res) => {
    res.render('hydrus');
};

module.exports = indexCtrl;