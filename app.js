// Incluir as bibliotecas
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

//Controllers API
const register = require("./controllers/register")
const login = require("./controllers/login");

//Endpoints
app.use('/login', login);
app.use('/register', register);

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});