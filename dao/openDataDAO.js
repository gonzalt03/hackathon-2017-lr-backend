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
    get: async(url) => {
        const result =  await Utils.requestGet(url);
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