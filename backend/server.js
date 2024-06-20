const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testedb', {
}).then(() => console.log('MongoDB conectado...'))
.catch(err => console.log(err));

// Rotas
app.use('/api/data', require('./routes/data'));

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
