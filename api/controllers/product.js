const express = require('express');
const router = express.Router();

const db = require('../db/models');

// Endpoint para buscar todos os produtos ou um produto específico por ID ou nome
router.get('/', async (req, res) => {
  const { id, nome } = req.query;

  try {
    let products;

    if (id) {
      products = await db.products.findOne({ where: { id } });
    } else if (nome) {
      products = await db.products.findOne({ where: { nome } });
    } else {
      products = await db.products.findAll();
    }

    if (!products) {
      return res.status(404).json({ error: true, message: 'Produto não encontrado.' });
    }

    return res.json({ error: false, products });
  } catch (error) {
    return res.status(500).json({ error: true, message: 'Erro interno do servidor.' });
  }
});

module.exports = router;
