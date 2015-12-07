/**
 * Created by Andrey on 06.12.2015.
 */

var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    name: String,
    image:String,
    note: String,
    type:String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Photo', TodoSchema);