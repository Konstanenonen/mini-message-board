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

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send a new message' });
});

router.post('/new', function (req, res, next) {
  const text = req.body.text;
  const user = req.body.user;

  messages.push({ text, user, added: new Date() });

  res.redirect('/');
});

module.exports = router;
