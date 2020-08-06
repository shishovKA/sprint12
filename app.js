const express = require('express');

const path = require('path');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//  обработчик ошибки 404
const errorNotFound = (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
};

//  импортируем роуты
const users = require('./routes/users.js');
const cards = require('./routes/cards');

app.use('/users', users);
app.use(cards);
app.use(errorNotFound);

app.listen(PORT, () => {
  console.log(`Слушаем на порту ${PORT}`);
});
