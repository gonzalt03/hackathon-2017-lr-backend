/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//TODO adapter schema pour le stockage des données OPENDATA (plus ajout de methode perso pour reformater)
var testSchema = new Schema({
    name: String,
    date: String,
    author: String
},{ collection: 'myCollection' });

var Test = mongoose.model('test', testSchema);

module.exports = Test;