// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Importar a biblioteca para permitir conexão externa
const cors = require('cors')
// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {
    // Qualquer endereço pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    // Tipos de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // Executar o cors
    app.use(cors());
    // Quando não houver erro deve continuar o processamento
    next();
});

const db = require("./db/models")

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Listar as tabelas do banco de dados
    db.sequelize
      .query('SHOW TABLES')
      .then(([results, metadata]) => {
        console.log('Tabelas no banco de dados:', results);
      })
      .catch((error) => {
        console.error('Erro ao obter as tabelas do banco de dados:', error);
      });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
//Controllers API
const register = require('./controllers/register');
const login = require('./controllers/login');
const product = require('./controllers/product');
const cart = require("./controllers/cart");



//Endpoints
app.use('/login', login);
app.use('/register', register);
app.use('/product', product);
app.use("/cart", cart);



const PORT = 8080; // Escolha uma porta disponível para o servidor web

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
