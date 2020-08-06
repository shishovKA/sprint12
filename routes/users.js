const users = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const loadFile = (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      console.log('файл не прочитался ', path.join(__dirname, 'data/users.json'));
    });
};

users.use(loadFile);

module.exports = users;
