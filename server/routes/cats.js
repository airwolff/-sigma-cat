var express = require('express');
var router = express.Router();

// Cat data
var cats = [
  {
    catName: 'Luna',
    temperment: 'Devilish'
  }
];

router.get('/', function(req, res) {
  console.log('get cats');
  res.send(cats);
});

router.post('/', function(req, res) {
  console.log('adding a new cat');
  // console.log('req dot body', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
