const  PORT = "7070";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var createProductRouter = require('./routes/createProduct');



var mongoDb = require('./src/mongo/mongoDriver');
var User = require('./src/mongo/user_scheme');
var bodyParser = require('body-parser');

var app = express();


//cors stuff
var whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000','http://127.0.0.1:'+PORT,'http://localhost:'+PORT];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());

//body parser for url encoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/product', createProductRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/*
app.get('/login', urlencodedParser, function (req, res) {
  
	}
});
*/

app.listen(PORT);

module.exports = app;
