var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');

router.get('/', function(req, res, next) {
  let sessionData = db.get('session')
  .find({uuid : req.cookies.uuid})
  .value()

  res.render('main', { name : sessionData.name });
});

router.post('/', function(req, res, next) {
  res.render('main');
});

router.post('/signupToMain', (req, res) => {
  setCookieAndSession(res, req.body.name);
  res.redirect('/main');
});

router.post('/signinToMain', async(req, res) => {
  let userJSON = db.get('users')
  .find({email : req.body.email})
  .value()

  await setCookieAndSession(res, userJSON.name);
  res.redirect('/main');
});

const setCookieAndSession = async(res,name) => {
  let key = uuidv1();
  res.cookie('uuid',key);
  
  db.get('session')
  .push({uuid : key, name : name})
  .write()
  
  return key;
}

module.exports = router;
