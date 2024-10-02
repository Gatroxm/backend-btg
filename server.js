const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar cors
const transactionRoutes = require('./routes/transactions');
const fundRoutes = require('./routes/funds');

const app = express();
app.use(cors()); // Habilitar CORS
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/btg', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.log('Error al conectarse a MongoDB', err);
});

// Usar las rutas
app.use('/api/transactions', transactionRoutes);
app.use('/api/funds', fundRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
