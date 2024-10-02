const mongoose = require('mongoose');

const fundSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, // Nombre del fondo
    },
    montoMinimo: {
        type: Number,
        required: true, // Monto mínimo para vincularse al fondo
    },
});

module.exports = mongoose.model('Fund', fundSchema);
