var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);
const crypto = require('crypto');

router.post('/userCheck', (req, res) => {    //로그인 시도를 하면 db에서 확인 후 redirect해준다.
  console.log(crypto.createHash('sha512').update(req.body.password).digest('base64'));
  let isUser = db.get('users')
  .find({email: req.body.email, password: crypto.createHash('sha512').update(req.body.password).digest('base64')})
  .value();

  isUndefined(isUser,res);
});

router.post('/duplicateCheck', (req, res) => {
  let isUser = db.get('users')
  .find({id:req.body.id})
  .value();

  isUndefined(isUser,res);
});

const isUndefined = (isUser,res) => {
  if(isUser === undefined){
    res.send(false);
  }else{
    res.send(true);
  }
}

module.exports = router;

