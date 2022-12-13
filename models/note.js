const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const noteSchema = new Schema({
    text: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
}, {
    timestamps: true
});                                                                    

module.exports = mongoose.model('Note', noteSchema);