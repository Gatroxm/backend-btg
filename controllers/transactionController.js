const Transaction = require('../models/transaction');
const { v4: uuidv4 } = require('uuid');

// Obtener todas las transacciones
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las transacciones' });
    }
};

// Crear una nueva transacción
const createTransaction = async (req, res) => {
    const { fondoId, monto } = req.body;
    const newTransaction = new Transaction({
        tipo: 'Apertura',
        fondoId,
        monto,
        identificador: uuidv4(),
    });

    try {
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la transacción' });
    }
};

// Actualizar una transacción
const updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { fondoId, monto } = req.body;

    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            id,
            { fondoId, monto },
            { new: true }
        );
        res.json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la transacción' });
    }
};

// Eliminar una transacción
const deleteTransaction = async (req, res) => {
    const { id } = req.params;

    try {
        await Transaction.findByIdAndDelete(id);
        res.json({ message: 'Transacción eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la transacción' });
    }
};

module.exports = {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
};
