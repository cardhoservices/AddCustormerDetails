const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    Name: String,
    Phone: Number,
    Address: String,
    Car: String,
    StartDate: Date,
    interriorfirst:Date,
    interriorsecond:Date,
    interriorthird:Date,
    interriorfourth:Date,

})

const Subscription = mongoose.model('details', SubscriptionSchema);
module.exports = Subscription;
