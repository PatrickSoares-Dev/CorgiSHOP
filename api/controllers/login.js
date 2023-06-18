const express = require('express');
const router = express.Router();

const db = require('../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: true, message: 'E-mail não encontrado.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: true, message: 'Senha incorreta.' });
    }

    return res.json({ error: false, message: 'Usuário logado com sucesso.' });
  } catch (error) {
    return res.status(500).json({ error: true, message: 'Erro interno do servidor.' });
  }
});

module.exports = router;
