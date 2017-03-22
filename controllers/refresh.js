/**
 * GET /
 */

const DataObject = require('../models/DataObject');
const OpenDataObject = require('../models/OpenDataObject');
const mongoDAO = require('../dao/mongoDAO');
const requestGet = require('../request/request');


/**
 * REFRESH /
 */
exports.refresh = function(req,res){

    console.log("refresh");

    // Request start
    const result =  requestGet.requestGet("https://opendata.larochelle.fr/webservice/?service=getData&key=RCX5bwVyOwITdtzj&db=stationnement&table=disponibilite_parking&format=json");


    const date=new Date();

    const item = {
        values : result,
        update_date: date.getTime()
    };

    const data = new DataObject(item);

    data.save();

    res.redirect('/');

    //TODO message de confirmation comme quoi la donnée a été insérée
};

