const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true, // Tipo de transacción (Apertura o Cancelación)
    },
    fondoId: {
        type: String,
        required: true, // ID del fondo asociado
    },
    monto: {
        type: Number,
        required: true, // Monto de la transacción
    },
    fecha: {
        type: Date,
        default: Date.now, // Fecha por defecto es la fecha actual
    },
    identificador: {
        type: String,
        unique: true,
        required: true, // Identificador único para la transacción
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
