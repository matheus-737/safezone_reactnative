const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// Rota para criar um novo registro
router.post('/add', async (req, res) => {
    console.log('Recebido POST /add:', req.body);
    const { name, matricula, setor, observacoes, image, latitude, longitude } = req.body;
    try {
        const newData = new Data({ name, matricula, setor, observacoes, image, latitude, longitude });
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para obter todos os registros
router.get('/all', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
