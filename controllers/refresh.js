/**
 * GET /
 */

var DataObject = require('../models/DataObject');
var OpenDataObject = require('../models/OpenDataObject');
const mongoDAO = require('../dao/mongoDAO');

/**
 * REFRESH /
 */
exports.refresh = function(req,res){

    console.log("refresh");

    var requestGet = require('../request/request');

    // Request start
    requestGet.requestGet("https://opendata.larochelle.fr/webservice/?service=getData&key=RCX5bwVyOwITdtzj&db=stationnement&table=disponibilite_parking&format=json");


    var date=new Date();
    var item = {
        values : req.body,
        update_date: new Date().getTime()
    };

    var data = new DataObject(item);
    data.save();

    res.redirect('/');

    //TODO message de confirmation comme quoi la donnée a été insérée
};

