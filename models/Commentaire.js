/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

module.exports = mongoose.model('commentaire', new Schema({
    name: String,
    datetime: String,
    mail: String,
    value: String
}, {collection: 'comments'}));
