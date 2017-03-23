/**
 * GET /
 */

const Commentaire = require('../models/Commentaire');
const mongoDAO = require('../dao/mongoDAO');
const openDataDAO = require('../dao/openDataDAO');
const url = require('../models/url');
const tag = require('../models/tag');
const metadata = require('../models/metadata.json');

exports.index = function (req, res) {
    res.render('home', {title: "Home"});
};

exports.get_data = async(req, res) => {
    const request = req.query.url;

    const result = await openDataDAO.get(url[request]);
    res.render('home', {title: "Home", items: result.opendata.answer.status});
};

exports.get_id = async(req, res) => {
    const request = req.query.tag;

    let result = [];

    for (let props in metadata) {
        console.log(metadata[props].identifier);
        if ((String(metadata[props].tags).toLowerCase()).includes(request.toLowerCase())) {
            result.push(metadata[props])
        }
    }
    res.send(result)
}
;


exports.api_get_data = async(req, res) => {
    const request = req.query.url;
    const result = await openDataDAO.get(url[request]);
    res.send(result.opendata.answer.data);
};


/**
 * POST /
 */
exports.post_data = function (req, res) {

    console.log("post_data");
    var date = new Date();
    var item = {
        name: req.body.name,
        date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        mail: req.body.mail,
        value: req.body.value
    };
    var data = new Commentaire(item);
    data.save();

    res.redirect('/');
};


/**
 * UPDATE /
 */
exports.update_data = function (req, res) {
    Commentaire.findOne({name: req.body.name}, function (err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.content = req.body.content;
        doc.mail = req.body.mail;
        doc.value = req.body.value;
        doc.save();
    });
    res.redirect('/');
};

exports.delete_data = function (req, res) {

    Commentaire.findOneAndRemove({mail: req.body.mail}, function (err, doc) {
        if (err) throw err;
        if (doc) {
            console.log('Doc found and removed');
        } else {
            console.log('No user found');
        }
    });
    res.redirect('/');
};
