const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'hey hey .... cat name is required.'
    },
    size: {
        type: Number,
        required: 'Cat size is required.'
    },
});

module.exports = mongoose.model('Cat', catSchema);