const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {type: String, required: true},
    price: {type: Number, required: true}
})

const Toy = mongoose.model('Fruit', toySchema);

module.exports = Toy;