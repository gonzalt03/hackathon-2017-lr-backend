/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

module.exports = mongoose.model('opendatavalues', new Schema({
    values: [],
    update_date: String

}, {collection: 'open-data-values'}));;
