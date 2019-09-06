var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

var mainRouter = require('./routes/main');
var dbCheckRouter = require('./routes/dbCheck');
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

app.use('/main', mainRouter);
app.use('/dbCheck', dbCheckRouter);


app.post('/signupToMain', async(req, res) => {
  await setCookieAndSession(req,res);
  res.redirect('/main');
});

app.post('/signinToMain', (req, res) => {
  setCookieAndSession(req,res);
  res.redirect('/main');
});

const setCookieAndSession = async(req,res) => {
  let key = uuidv1();
  res.cookie('name',key);
  db.get('session')
  .push({uuid : key, name : req.body.name})
  .write()
  return key;
}

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
