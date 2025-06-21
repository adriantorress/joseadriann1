const express = require('express');
const router = express.Router();
const { Livro, sequelize } = require('../models/Livro');

(async () => {
  await sequelize.sync();
})();

router.get('/', async (req, res) => {
  const livros = await Livro.findAll();
  res.render('livros/list', { livros });
});

router.get('/novo', (req, res) => {
  res.render('livros/form', { livro: {}, action: '/novo' });
});

router.post('/novo', async (req, res) => {
  await Livro.create(req.body);
  res.redirect('/');
});

router.get('/editar/:id', async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  res.render('livros/form', { livro, action: `/editar/${livro.id}` });
});

router.post('/editar/:id', async (req, res) => {
  await Livro.update(req.body, { where: { id: req.params.id } });
  res.redirect('/');
});

router.post('/deletar/:id', async (req, res) => {
  await Livro.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

module.exports = router;
