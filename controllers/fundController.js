const Fund = require('../models/fund');

// Obtener todos los fondos
const getAllFunds = async (req, res) => {
    try {
        const funds = await Fund.find();
        res.json(funds);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los fondos' });
    }
};

// Crear un nuevo fondo
const createFund = async (req, res) => {
    const { nombre, montoMinimo } = req.body;
    const newFund = new Fund({ nombre, montoMinimo });
    console.log(newFund);
    try {
        const savedFund = await newFund.save();
        res.status(201).json(savedFund);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el fondo' });
    }
};

// Actualizar un fondo
const updateFund = async (req, res) => {
    const { id } = req.params;
    const { nombre, montoMinimo } = req.body;

    try {
        const updatedFund = await Fund.findByIdAndUpdate(
            id,
            { nombre, montoMinimo },
            { new: true }
        );
        res.json(updatedFund);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el fondo' });
    }
};

// Eliminar un fondo
const deleteFund = async (req, res) => {
    const { id } = req.params;

    try {
        await Fund.findByIdAndDelete(id);
        res.json({ message: 'Fondo eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el fondo' });
    }
};

module.exports = {
    getAllFunds,
    createFund,
    updateFund,
    deleteFund,
};
