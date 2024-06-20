const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    matricula: { type: String, required: true },
    setor: { type: String, required: true },
    observacoes: { type: String, required: true },
    image: { type: String, required: false },
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false }
});

module.exports = mongoose.model('Data', DataSchema);
