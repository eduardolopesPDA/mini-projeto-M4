const f1Service = require('../services/F1Service');

class F1Controller {
    async getAllPilotos(req, res) {
        try {
            const pilotos = await f1Service.getAllPilotos();
            res.json(pilotos);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar pilotos' });
        }
    }

    async getPilotoById(req, res) {
        try {
            const piloto = await f1Service.getPilotoById(req.params.id);
            if (piloto) {
                res.json(piloto);
            } else {
                res.status(404).json({ mensagem: 'Piloto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar piloto' });
        }
    }

    async getPilotosByEquipe(req, res) {
        try {
            const pilotos = await f1Service.getPilotosByEquipe(req.params.equipe);
            if (pilotos && pilotos.length > 0) {
                res.json(pilotos);
            } else {
                res.status(404).json({ mensagem: `Nenhum piloto encontrado para a equipe: ${req.params.equipe}` });
            }
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar pilotos por equipe' });
        }
    }
}

module.exports = new F1Controller();