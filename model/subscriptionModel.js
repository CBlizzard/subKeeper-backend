const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    vendor: {type: String, required: true},
    vendorNumber: {type: Number, required: true},
    vendorID: {type: String, required: true},
    subscriptionName: {type: String, required: true},
    startingDate: {type: String, required: true},
    endingDate: {type: String, required: true},
    price: {type: Number, required: true},
    // time: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('subscription', subscriptionSchema);