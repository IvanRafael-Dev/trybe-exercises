const rescue = require('express-rescue');
const { Product } = require('../models');

const createProduct = rescue(async (req, res) => {
  const { name, description, price } = req.body;

  const newProduct = await Product.create({ name, description, price });

  res.status(201).json(newProduct);
});

const getAllProducts = rescue(async (req, res) => {
  const products = await Product.findAll();

  res.status(200).json(products);
});

const getProductById = rescue(async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return next({
      statusCode: 404,
      message: 'Produto não encontrado',
    });
  }

  res.status(200).json(product);
});

const updateProduct = rescue(async (req, res, next) => {
  const { name, description, price } = req.body;

  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return next({
      statusCode: 404,
      message: 'Produto não encontrado',
    });
  }

  await Product.update(
    { name, description, price },
    { where: { id: req.params.id } }
  );

  res.status(200).json({ message: 'Produto atualizado com sucesso' });
});

const destroyProduct = rescue(async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });

  res.status(204).end();
});

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  destroyProduct,
};
