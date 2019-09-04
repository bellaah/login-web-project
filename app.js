var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const url = require('url');
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var password;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//요청이 실행됨 (http 요청이 오면 app이 처리한다.)
app.use(logger('dev'));   
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send(req.cookies.password);
  res.render('index', { password: req.cookies.password });
});

app.post('/main', (req, res) => {
  password = req.body.password;
  res.send(password + "s");
  res.cookie('password', password);
  res.redirect('/');
});






app.use(express.static(path.join(__dirname, 'public')));   //public에 있는 html로 접근할 시 바로 보여준다.

app.engine('html', require('pug').renderFile);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/a', (req,res,next) =>{    //get 메소드를 처리하는 미들웨어 (req로 쿠키를 읽어올 수 있다.)
  res.send("");
})

const middle = (req,res,next) => {
  console.log("real middleware");
  next();
}

app.get('/b', middle,(req,res,next) =>{    //get 메소드를 처리하는 미들웨어 (req로 쿠키를 읽어올 수 있다.)
  console.log("#");   //res를 안보냈기때문에 여기에 멈춰있다.
  next();   //next를하면 아래로 코드가 넘어간다.
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler  
app.use(function(err, req, res, next) {   //에러 핸들러는 파라미터가 4개다.
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
