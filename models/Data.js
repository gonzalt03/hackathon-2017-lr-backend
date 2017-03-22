/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//TODO adapter schema pour le stockage des données OPENDATA (plus ajout de methode perso pour reformater)
var dataSchema = new Schema({
    data: object,
    metadata: object
}, {collection: 'myCollection'});

var Data = mongoose.model('data', dataSchema);

module.exports = data;
