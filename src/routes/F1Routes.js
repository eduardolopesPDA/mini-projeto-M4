const express = require('express');
const router = express.Router();
const F1Service = require('../services/F1Service');

// GET /f1/pilotos - Retorna a lista de todos os pilotos do grid de 2025
router.get('/pilotos', async (req, res) => {
    try {
        const pilotos = await F1Service.getAllPilotos();
        res.json(pilotos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar pilotos' });
    }
});

// GET /f1/pilotos/:id - Retorna um piloto específico pelo ID
router.get('/pilotos/:id', async (req, res) => {
    try {
        const piloto = await F1Service.getPilotoById(req.params.id);
        if (piloto) {
            res.json(piloto);
        } else {
            res.status(404).json({ mensagem: 'Piloto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar piloto' });
    }
});

// GET /f1/equipes/:equipe - Retorna a lista de pilotos de uma equipe específica
router.get('/equipes/:equipe', async (req, res) => {
    try {
        const pilotos = await F1Service.getPilotosByEquipe(req.params.equipe);
        if (pilotos && pilotos.length > 0) {
            res.json(pilotos);
        } else {
            res.status(404).json({ mensagem: `Nenhum piloto encontrado para a equipe: ${req.params.equipe}` });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar pilotos da equipe' });
    }
});

module.exports = router;