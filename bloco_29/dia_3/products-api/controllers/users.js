/* eslint-disable sonarjs/no-duplicate-string */
const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, username, email, password } = req.body;
  User.create({ name, username, email, password })
    .then((newUser) => {
      const { id, createdAt, updatedAt } = newUser;
      return res.status(201).json({ id, name, username, email, createdAt, updatedAt });
    })
    .catch((e) => {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    });
});

router.get('/', (req, res) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((e) => {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    });
});

router.get('/:id', (req, res) => {
  User.findByPk(req.params.id, { attributes: { exclude: ['password'] } })
    .then(async (user) => {
      if (user === null) return res.status(404).json({ message: 'Usuario não encontrado' });
      if (!req.query.includeProducts) return res.status(200).json(user);
      
      const products = await user.getProducts();
      return res.status(200).json({ ...user.dataValues, products });
    })
    .catch((e) => {
      console.log(e.message);
      return res.status(500).json({ message: 'Algo deu errado' });
    });  
});

router.put('/:id', (req, res) => {
  const { name, username, email, password } = req.body;
  User.update(
    { name, username, email, password },
    { where: { id: req.params.id } },
  )
  .then((_user) => res.status(200).json({ message: 'Usuário atualizado com sucesso' }))
  .catch((e) => {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: { id: Number(req.params.id) },
  })
  .then((_user) => res.status(200).json({ message: 'Usuário excluído com sucesso' }))
  .catch((e) => {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  });
});

module.exports = router;