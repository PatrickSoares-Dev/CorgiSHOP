const express = require('express');
const router = express.Router();

const db = require('../db/models');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar se o email já está sendo usado
    const existingUser = await db.users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: true, message: 'Este email já está sendo usado.' });
    }

    // Criar um novo usuário
    const newUser = await db.users.create({ name, email, password });

    return res.json({ error: false, message: 'Usuário cadastrado com sucesso.', data: newUser });
  } catch (error) {
    return res.status(500).json({ error: true, message: 'Erro interno do servidor.' });
  }
});

module.exports = router;
