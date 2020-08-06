const cards = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const loadFile = (req, res) => {
  const fileDir = path.join(__dirname, '../data/cards.json');
  fsPromises.readFile(fileDir, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({ message: `Ошибка при загрузке файла по адресу ${fileDir}` });
    });
};

cards.use(loadFile);

module.exports = cards;
