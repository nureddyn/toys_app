const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String},
    storeURL: {type: String, required: true}
})

const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;
