/**
 * Created by quentinnicolle on 20/03/2017.
 */
'use strict';

let Commentaire = require('../models/Commentaire');

const mongoDAO = {

    /**
     *  GET DATA
     */
    get: async() => {
        return await Commentaire.find((err, doc) => {
            if (err) throw err;
            return doc
        });
    }

};

export default mongoDAO;