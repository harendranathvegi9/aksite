'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PhotoSchema = new Schema({
	name: String,
	info: String,
	hidden: Boolean,
    fileId: String,
    thumbnailId: String,
    sourceUri: String,
    metadata: {

    }
});

module.exports = mongoose.model('Photo', PhotoSchema);
