const express = require('express');
const router = express.Router();

const db = require('../db/models')

router.post('/', async(req, res)  => {
    var data = req.body  

    await db.users.create(data).then((dataRegister) => {
        return res.json({
            error: false,
            message: 'Usuário cadastrado com sucesso',
            data: dataRegister
        })
    }).catch((error) => {
        return res.json({
            error: false,
            message: 'Erro: Não foi possível cadastrar o usuário!',
        })
    })


})

module.exports = router;