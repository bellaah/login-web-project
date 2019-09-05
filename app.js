var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));   
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));   //public에 있는 html로 접근할 시 바로 보여준다.
app.engine('html', require('pug').renderFile);

db.defaults({ users:[]})
  .write()

app.post('/userCheck', (req, res) => {    //로그인 시도를 하면 db에서 확인 후 redirect해준다.
  let isUser = db.get('users')
  .find({email: req.body.email, password:req.body.password})
  .value();
  console.log(isUser);

  if(isUser === undefined){
    res.send(false);
  }else{
    res.cookie('name', isUser.name);
    res.send(true);
  }
});

app.post('/main', (req, res) => {
  res.cookie('id', req.body.id);
  res.send("!!");
});

app.post('/registerUser', (req, res) => {
  console.log(req.body);
  db.get('users')
  .push(req.body)
  .write()
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler  
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
