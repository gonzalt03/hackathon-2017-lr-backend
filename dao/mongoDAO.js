/**
 * Created by quentinnicolle on 20/03/2017.
 */
'use strict';

let Test = require('../models/Test');

const mongoDAO = {

    /**
     *  GET DATA
     */
    get : async() => {
        return await Test.find((err, doc) => {
            if (err) throw err;
            return doc
        });
    }

};

export default mongoDAO;