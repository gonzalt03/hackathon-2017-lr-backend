/**
 * Created by quentinnicolle on 20/03/2017.
 */
'use strict';

const Utils = require('../request/request');

const DataObject = require('../models/DataObject');

const openDataDAO = {

    /**
     *  GET DATA
     */
    get: async() => {
        const result =  await Utils.requestGet("https://opendata.larochelle.fr/webservice/?service=getData&key=RCX5bwVyOwITdtzj&db=stationnement&table=disponibilite_parking&format=json");
        const d = JSON.parse(result);

        const date=new Date();
        const items = {
            values : d.opendata.answer.data,
            update_date: date.getFullYear() + "-" + (date.getMonth()+1) +"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()
        };

        const data = new DataObject(items);
        data.save();

        return d;
    }

};

export default openDataDAO;