const f1Model = require('../models/F1Model');

class F1Controller {
    getAllPilotos(req, res) {
        const pilotos = f1Model.getAllPilotos();
        res.json(pilotos);
    }

    getPilotoById(req, res) {
        const piloto = f1Model.getPilotoById(req.params.id);
        if (piloto) {
            res.json(piloto);
        } else {
            res.status(404).json({ mensagem: 'Piloto não encontrado' });
        }
    }

    getPilotosByEquipe(req, res) {
        const pilotos = f1Model.getPilotosByEquipe(req.params.equipe);
        if (pilotos && pilotos.length > 0) {
            res.json(pilotos);
        } else {
            res.status(404).json({ mensagem: `Nenhum piloto encontrado para a equipe: ${req.params.equipe}` });
        }
    }
}

module.exports = new F1Controller();