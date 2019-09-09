var db = require('./db.js');
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');

router.use(cookieParser());

router.all('/', function(req, res, next) {
  if(checkLogin(req.cookies.uuid)){
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

const setCookieAndSession = async(res,name) => {    //시간 지나면 session도 같이 없어지게 처리해야함, 시간은 1시간으로 변경할 것
  let key = uuidv1();
  res.cookie('uuid',key,{expires : new Date(Date.now()+10000)}); 

  db.get('session')
  .push({uuid : key, name : name})
  .write();
}

const checkLogin = (cookie) => {
  return cookie === undefined ? false : true;
}


module.exports = router;