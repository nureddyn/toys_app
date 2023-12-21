const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {type: Number, required: true},
    image: {type: String},
    storeURL: {type: String, required: true}
});

const Wish = mongoose.model('Wish', wishSchema);

module.exports = Wish;