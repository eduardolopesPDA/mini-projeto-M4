const express = require('express');
const router = express.Router();
const f1Controller = require('../controllers/F1Controller');

// GET /f1/pilotos - Retorna a lista de todos os pilotos do grid de 2025
router.get('/pilotos', f1Controller.getAllPilotos);

// GET /f1/pilotos/:id - Retorna um piloto específico pelo ID
router.get('/pilotos/:id', f1Controller.getPilotoById);

// GET /f1/equipes/:equipe - Retorna a lista de pilotos de uma equipe específica
router.get('/equipes/:equipe', f1Controller.getPilotosByEquipe);

module.exports = router;