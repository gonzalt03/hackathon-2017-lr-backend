/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');
var DataObject = require('../models/OpenDataObject');
var Comment = require('../models/Commentaire');

var Schema = mongoose.Schema;

module.exports = mongoose.model('opendata', new Schema({
    data: [],
    metadata: [],
    comment: [],
    created_date: String

}, {collection: 'open-data'}));
