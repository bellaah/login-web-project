var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var db = require('./db.js');

/**
 * 로그인 버튼을 누르면 db에 등록된 user인지 확인한다.
 * 넘겨받은 email과 password를 isUndefined()메서드의 파라미터로 줘서 확인하게 한다.
 */
router.post('/userCheck', (req, res) => {   
  let jsonData = {email: req.body.email, password: crypto.createHash('sha512').update(req.body.password).digest('base64')};
  isUndefined(jsonData,res);
});

/**
 * 회원가입 시, 입력한 "아이디"가 이미 존재하는지 확인한다.
 * 넘겨받은 id를 isUndefined()메서드의 파라미터로 줘서 확인하게 한다.
 */
router.post('/duplicateCheck', (req, res) => {
  isUndefined({id:req.body.id},res);
});

/**
 * 모든 input을 입력하고 회원가입을 요청하면 그 data를 db에 저장한다.
 */
router.post('/registerUser', (req, res) => {
  req.body.password = crypto.createHash('sha512').update(req.body.password).digest('base64');
  db.get('users')
  .push(req.body)
  .write()

  res.send("success");
});

/**
 * lowdb find를 이용해 해당 data가 있는지 확인하는 메서드
 * @param {JSON} jsonData : db에서 확인해야 할 조건이 들어있는 json 객체이다.
 * @param {JSON} res : res 객체이다.
 */
const isUndefined = (jsonData,res) => {
  let isUser = db.get('users')
  .find(jsonData)
  .value();

  if(isUser === undefined){
    res.send(false);
  }else{
    res.send(true);
  }
}


module.exports = router;

