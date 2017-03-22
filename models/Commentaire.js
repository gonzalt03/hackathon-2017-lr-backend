/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//TODO adapter schema pour le stockage des données OPENDATA (plus ajout de methode perso pour reformater)
var commentaireSchema = new Schema({
    name: String,
    date: String,
    mail: String,
    value: String
}, {collection: 'myCollection'});

var Commentaire = mongoose.model('commentaire', commentaireSchema);

module.exports = Commentaire;
