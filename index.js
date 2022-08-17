require('dotenv').config();

const express = require('express');

const cors = require('cors');

const routes = require('./src/routes/personagens.route');

const conectDatabase = require('./src/database/database');

const app = express();

const port = process.env.PORT || 3000;

conectDatabase();

app.use(express.json());

app.use(cors());

app.use('/personagens', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta : ${port}`);
});
