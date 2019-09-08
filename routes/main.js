var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');

//디비는 한파일에서만 써야한다???? 다른파일에서 읽는 건 되지만 쓰려고 하면 써지지 않는다. (동시에) 왜일까?

router.use(cookieParser());

router.all('/', function(req, res, next) {
  if(req.cookies.uuid){
    let sessionData = db.get('session')
    .find({uuid : req.cookies.uuid})
    .value();

    res.render('userMain', { name : sessionData.name });
  }else{
    res.render('guestMain');
  }
});

router.get('/userToGuest', function(req, res, next) {
  res.clearCookie("uuid");
  db.get('session')
  .remove({uuid : req.cookies.uuid})
  .write();

  res.redirect('/main');
});

router.post('/signupToMain', (req, res) => {
  setCookieAndSession(res, req.body.name);

  res.redirect('/main');
});

router.post('/signinToMain', async(req, res) => {
  let userJSON = db.get('users')
  .find({email : req.body.email})
  .value();

  await setCookieAndSession(res, userJSON.name);
  res.redirect('/main');
});

const setCookieAndSession = async(res,name) => {
  let key = uuidv1();
  res.cookie('uuid',key);

  db.get('session')
  .push({uuid : key, name : name})
  .write();
}

router.post('/registerUser', (req, res) => {
  db.get('users')
  .push(req.body)
  .write()

  db.get('users')
  .find({ name: req.body.name })
  .assign({ password : crypto.createHash('sha512').update(req.body.password).digest('base64')})
  .write()

  res.send("success");
});

module.exports = router;
