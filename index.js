const express = require('express');
const app = express();
const f1Routes = require('./view/f1Routes');
const PORT = 3000;

app.use('/f1', f1Routes);

app.listen(PORT, () => {
    console.log(`API de Fórmula 1 rodando em http://localhost:${PORT}`);
});