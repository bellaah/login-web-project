var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


router.get('/', async function(req, res, next) {
  const adapter = new FileSync('./db.json');
  const db = low(adapter);

  key = req.cookies.name;
  let sessionData = await db.get('session')
  .find({uuid : key})
  .value()

  res.render('main', { name : sessionData.name });
});

router.post('/', function(req, res, next) {
  res.render('main', { name : req.cookies.name });
});

module.exports = router;
