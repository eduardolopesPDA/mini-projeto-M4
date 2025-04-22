class F1Model {
    constructor() {
        this.grid2025 = [
            { id: 1, piloto: 'Max Verstappen', equipe: 'Red Bull Racing' },
            { id: 2, piloto: 'Yuki Tsunoda', equipe: 'Red Bull Racing' },
            { id: 3, piloto: 'Charles Leclerc', equipe: 'Ferrari' },
            { id: 4, piloto: 'Louis Hamilton.', equipe: 'Ferrari' },
            { id: 5, piloto: 'Kimi Antonelli', equipe: 'Mercedes' },
            { id: 6, piloto: 'George Russell', equipe: 'Mercedes' },
            { id: 7, piloto: 'Lando Norris', equipe: 'McLaren' },
            { id: 8, piloto: 'Oscar Piastri', equipe: 'McLaren' },
            { id: 9, piloto: 'Fernando Alonso', equipe: 'Aston Martin' },
            { id: 10, piloto: 'Lance Stroll', equipe: 'Aston Martin' },
            { id: 11, piloto: 'Pierre Gasly', equipe: 'Alpine' },
            { id: 12, piloto: 'Jack Dohan', equipe: 'Alpine' },
            { id: 13, piloto: 'Alexander Albon', equipe: 'Williams' },
            { id: 14, piloto: 'Carlos Sainz', equipe: 'Williams' },
            { id: 15, piloto: 'Nico Hulkenberg', equipe: 'Sauber' },
            { id: 16, piloto: 'Gabriel Bortoleto', equipe: 'Sauber' },
            { id: 17, piloto: 'Oliver Bearman', equipe: 'Haas F1 Team' },
            { id: 18, piloto: 'Esteban Ocon', equipe: 'Haas F1 Team' },
            { id: 19, piloto: 'Liam Lawson', equipe: 'RB' },
            { id: 20, piloto: 'Isack Hadjar', equipe: 'RB' },
        ];
    }

    getAllPilotos() {
        return this.grid2025;
    }

    getPilotoById(id) {
        return this.grid2025.find(piloto => piloto.id === parseInt(id));
    }

    getPilotosByEquipe(equipe) {
        const equipeLower = equipe.toLowerCase();
        return this.grid2025.filter(piloto => piloto.equipe.toLowerCase() === equipeLower);
    }
}

module.exports = new F1Model();