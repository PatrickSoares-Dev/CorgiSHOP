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
      const cartItems = await db.cart.findAll({ where: { userId } });
  
      // Buscar o total de itens no carrinho
      const qtd_carrinho = cartItems.length;
  
      // Criar um objeto para armazenar as quantidades de produtos
      const productQuantities = {};
  
      // Criar um array para armazenar os produtos do carrinho
      const products = [];
  
      // Calcular o valor total do carrinho
      let total_value = 0;
  
      // Percorrer os itens do carrinho e buscar as informações dos produtos
      for (const item of cartItems) {
        const { productId, nome } = item;
  
        // Verificar se o produto já foi contado anteriormente
        if (productQuantities[productId]) {
          // Se sim, incrementar a quantidade
          productQuantities[productId]++;
        } else {
          // Se não, iniciar a contagem com 1
          productQuantities[productId] = 1;
        }
  
        // Buscar as informações do produto pelo productId na tabela "Products"
        const product = await db.products.findByPk(productId);
  
        // Calcular o valor total do produto (caso necessário)
        const qtd_product = productQuantities[productId];
        const totalProductPrice = parseFloat(product.valorProduto) * qtd_product;
        total_value += totalProductPrice;
  
        // Adicionar as informações do produto ao array de produtos
        products.push({
          id: product.id,
          nome: product.nome,
          valorProduto: product.valorProduto,
          valorOff: product.valorOff,
          categoriaId: product.categoriaId,
          imagem1: product.imagem1,
          imagem2: product.imagem2,
          imagem3: product.imagem3,
          imagem4: product.imagem4,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
          qtd_products: qtd_product // Adicionar a quantidade do produto
        });
      }
  
      // Criar o objeto de resposta
      const response = {
        userId,
        qtd_carrinho,
        products,
        total_value
      };
  
      return res.json(response);
    } catch (error) {
      console.log(error);
      console.log(response);
      return res.status(500).json({ error: "Erro ao obter o carrinho." });
    }
  });
  
  

module.exports = router;

