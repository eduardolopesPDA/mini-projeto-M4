class F1Model {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAllPilotos() {
        return await this.prisma.piloto.findMany();
    }

    async getPilotoById(id) {
        return await this.prisma.piloto.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async getPilotosByEquipe(equipe) {
        return await this.prisma.piloto.findMany({
            where: { equipe: { equals: equipe, mode: 'insensitive' } },
        });
    }

    async createPiloto(data) {
        return await this.prisma.piloto.create({
            data: data,
        });
    }

    async updatePiloto(id, data) {
        return await this.prisma.piloto.update({
            where: { id: parseInt(id) },
            data: data,
        });
    }

    async deletePiloto(id) {
        return await this.prisma.piloto.delete({
            where: { id: parseInt(id) },
        });
    }
}

module.exports = F1Model;