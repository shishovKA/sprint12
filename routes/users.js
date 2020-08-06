const users = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const loadFile = (req, res) => {
  const fileDir = path.join(__dirname, '../data/users.json');
  fsPromises.readFile(fileDir, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({ message: `Ошибка при загрузке файла по адресу ${fileDir}` });
    });
};

users.use(loadFile);

module.exports = users;
