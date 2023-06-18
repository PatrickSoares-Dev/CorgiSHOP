const express = require("express");
const router = express.Router();
const db = require("../db/models");

//cart APi

router.post("/add-cart", async (req, res) => {
  try {
    const { email, productId } = req.body;

    // Buscar o ID do usuário pelo e-mail na tabela "Users"
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    const userId = user.id;

    // Buscar o nome do produto pelo productId na tabela "Products"
    const product = await db.products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    const nome = product.nome;

    // Inserir os dados na tabela "Carts"
    await db.cart.create({ userId, productId, nome });
    return res.status(201).json({ message: "Produto adicionado ao carrinho com sucesso." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao adicionar produto ao carrinho." });
  }
});

router.get("/get-cart", async (req, res) => {
  try {
    const { email } = req.query;

    // Buscar o ID do usuário pelo e-mail na tabela "Users"
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    const userId = user.id;

    // Buscar os dados do carrinho pelo userId na tabela "Carts"
    const cartItems = await db.carts.findAll({ where: { userId } });

    // Criar um array para armazenar os produtos do carrinho
    const products = [];

    // Calcular o valor total do carrinho
    let total_value = 0;

    // Percorrer os itens do carrinho para buscar as informações detalhadas dos produtos
    for (const item of cartItems) {
      const { productId } = item;

      // Buscar as informações do produto pelo productId na tabela "Products"
      const product = await db.products.findByPk(productId);

      // Calcular o valor total do produto
      const productTotal = parseFloat(product.valorProduto);

      // Incrementar o valor total do carrinho
      total_value += productTotal;

      // Adicionar o produto ao array de produtos
      products.push({
        id: product.id,
        userId: user.id,
        productId: productId,
        nome: product.nome,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        valorProduto: product.valorProduto,
        imagem1: product.imagem1,
        imagem2: product.imagem2,
      });
    }

    // Formatar o valor total para exibir duas casas decimais
    total_value = total_value.toFixed(2);

    // Criar o objeto de resposta
    const response = {
      products,
      total_value,
    };

    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao obter o carrinho." });
  }
});

router.delete("/delete-cart", async (req, res) => {
  try {
    const { email, productId } = req.query;

    // Buscar o usuário pelo e-mail na tabela "Users"
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Buscar o carrinho do usuário com base no ID do usuário e no ID do produto
    const cartItem = await db.carts.findOne({ where: { userId: user.id, productId } });
    if (!cartItem) {
      return res.status(404).json({ error: "Produto não encontrado no carrinho." });
    }

    // Excluir o produto do carrinho
    await cartItem.destroy();

    return res.status(200).json({ message: "Produto removido do carrinho com sucesso." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao excluir produto do carrinho." });
  }
});







module.exports = router;

