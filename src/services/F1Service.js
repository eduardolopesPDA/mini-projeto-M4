const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class F1Service {
    async getAllPilotos() {
        return await prisma.piloto.findMany();
    }

    async getPilotoById(id) {
        return await prisma.piloto.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async getPilotosByEquipe(equipe) {
        return await prisma.piloto.findMany({
            where: { equipe: { equals: equipe, mode: 'insensitive' } },
        });
    }

    async createPiloto(data) {
        return await prisma.piloto.create({
            data,
        });
    }

    async updatePiloto(id, data) {
        return await prisma.piloto.update({
            where: { id: parseInt(id) },
            data,
        });
    }

    async deletePiloto(id) {
        return await prisma.piloto.delete({
            where: { id: parseInt(id) },
        });
    }
}

module.exports = new F1Service();