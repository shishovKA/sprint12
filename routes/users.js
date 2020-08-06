const users = require('express').Router();
const fs = require('fs');
const path = require('path');

const loadFile = (req, res, next) => {
  fs.readFile(path.join(__dirname, '../data/users.json'), (err, data) => { // передали вторым аргументом объект опций. Он содержит свойство encoding, куда записывают кодировку данных
    if (err) {
      console.log('файл не прочитался ', path.join(__dirname, 'data/users.json'));
      return;
    }
    console.log('data: ', data.toString('utf8')); // здесь мы не вызываем метод toString, поскольку данные уже пришли в виде строки
  });
  next();
};

users.use(loadFile);

users.get('/', (req, res) => {
  res.send({ message: 'Вы запросили адрес /users' });
});

module.exports = users;
