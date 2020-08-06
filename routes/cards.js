const cards = require('express').Router();

cards.get('/cards', (req, res) => {
  res.send({ message: 'Вы запросили адрес /cards' });
});

module.exports = cards;
