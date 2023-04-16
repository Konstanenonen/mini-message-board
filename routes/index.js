const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Obi-Wan',
    added: new Date(),
  },
  {
    text: 'Hi mom!',
    user: 'Konsta',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
