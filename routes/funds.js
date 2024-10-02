const express = require('express');
const router = express.Router();
const {
    getAllFunds,
    createFund,
    updateFund,
    deleteFund,
} = require('../controllers/fundController');

// Obtener todos los fondos
router.get('/', getAllFunds);

// Crear un nuevo fondo
router.post('/', createFund);

// Actualizar un fondo
router.put('/:id', updateFund);

// Eliminar un fondo
router.delete('/:id', deleteFund);

module.exports = router;
