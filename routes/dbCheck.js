var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const crypto = require('crypto');
var db = require('./db.js');

router.post('/userCheck', (req, res) => {   
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

router.post('/registerUser', (req, res) => {
  req.body.password = crypto.createHash('sha512').update(req.body.password).digest('base64');
  db.get('users')
  .push(req.body)
  .write()

  res.send("success");
});

const isUndefined = (isUser,res) => {
  if(isUser === undefined){
    res.send(false);
  }else{
    res.send(true);
  }
}


module.exports = router;

