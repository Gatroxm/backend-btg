const express = require('express');
const router = express.Router();
const {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController');

// Obtener todas las transacciones
router.get('/', getAllTransactions);

// Crear una nueva transacción
router.post('/apertura', createTransaction);

// Actualizar una transacción
router.put('/:id', updateTransaction);

// Eliminar una transacción
router.delete('/:id', deleteTransaction);

module.exports = router;
