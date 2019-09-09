var db = require('./db.js');
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
const uuidv1 = require('uuid/v1');

router.use(cookieParser());

/**
 * /main 으로 요청이 들어왔을 때, cookie가 있는지 없는지 확인하여 다른 화면을 보여준다.
 * checkLogin()메서드를 통해 쿠키가 있는지 확인한다.
 * cookie가 있으면 userMain을 렌더링하고 없으면 guestMain을 렌더링한다.
 */
router.all('/', (req, res, next) => {
  if(checkLogin(req.cookies.uuid)){
    let sessionData = db.get('session')
    .find({uuid : req.cookies.uuid})
    .value();
    res.render('userMain', { name : sessionData.name });
  }else{
    res.render('guestMain');
  }
});

/**
 * user가 로그아웃 버튼을 누르면 요청이 들어온다.
 * cookie와 session을 지우고 main으로 redirect한다.
 */
router.get('/userToGuest', (req, res, next) => {
  res.clearCookie("uuid");
  db.get('session')
  .remove({uuid : req.cookies.uuid})
  .write();

  res.redirect('/main');
});

/**
 * 회원가입을 끝낸 user를 main으로 이동하게 한다.
 * main으로 이동하기 전, cookie와 session을 설정한다.
 */
router.post('/signupToMain', (req, res) => {
  setCookieAndSession(res, req.body.name);

  res.redirect('/main');
});

/**
 * user가 로그인할 때, cookie와 session을 설정한다.
 */
router.post('/signinToMain', async(req, res) => {
  let userJSON = db.get('users')
  .find({id : req.body.id})
  .value();

  await setCookieAndSession(res, userJSON.name);
  res.redirect('/main');
});

/**
 * cookie와 session을 설정하는 메서드
 * cookie, session의 만료 시간은 1시간이다.
 * cookie는 expires로 시간을 설정하고, session은 setInterval를 사용하여 10분마다 cookie가 있는지 확인한다.
 * 확인했을 때, cookie가 없으면 session 또한 삭제된다.
 * @param {JSON} res 
 * @param {string} name 
 */
const setCookieAndSession = (res,name) => {    //시간 지나면 session도 같이 없어지게 처리해야함, 시간은 1시간으로 변경할 것
  let key = uuidv1();
  res.cookie('uuid',key,{expires : new Date(Date.now()+(1000 * 60 * 60))}); 

  db.get('session')
  .push({uuid : key, name : name, expires : (new Date().valueOf()+(1000 * 60 * 60))})
  .write()
}

/**
 * cookie가 있으면 true, 없으면 false를 return
 * @param {*} cookie 
 */
const checkLogin = (cookie) => {
  return cookie === undefined ? false : true;
}

/**
 * 세션의 expires 시간과 현재 시간을 비교해 시간이 지났으면 session의 data를 삭제한다.
 */
const checkSessionExpires = (() => {
  setInterval(() => {
    let sessionData = db.get('session').value();
    sessionData.forEach(elem => {
      if(elem.expires <= new Date().valueOf()){
        db.get('session')
        .remove({uuid : elem.uuid})
        .write();
      }
    });
  },(1000 * 60 * 10))
})
checkSessionExpires();

module.exports = router;