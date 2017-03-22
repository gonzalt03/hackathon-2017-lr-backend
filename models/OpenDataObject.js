/**
 * Created by quentinnicolle on 18/03/2017.
 */
var mongoose = require('mongoose');
var DataObject = require('DataObject');
var Comment = require('Comment');

var Schema = mongoose.Schema;

module.exports = mongoose.model('opendata', new Schema({
    data: DataObject,
    metadata: [],
    comment: Comment,
    created_date: String

}, {collection: 'open-data'}));
