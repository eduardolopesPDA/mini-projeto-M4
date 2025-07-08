const express = require('express');
const { PrismaClient } = require('@prisma/client');
const F1Routes = require('./routes/F1Routes');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/f1', F1Routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await prisma.$connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
});