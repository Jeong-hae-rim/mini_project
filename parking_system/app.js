var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var mainRouter = require('./server/routes/main');
var cogRouter = require('./server/routes/Cog');
var appInfoRouter = require('./server/routes/appInfo');
var contactRouter = require('./server/routes/contact');
var adminRouter = require('./server/routes/admin');
var adminPageRouter = require('./server/routes/adminPage');
var parkingInRouter = require('./server/routes/parkingIn');
var parkingOutRouter = require('./server/routes/parkingOut');
var timeCheckRouter = require('./server/routes/timeCheck');
var payRouter = require('./server/routes/pay');
var payFinishRouter = require('./server/routes/payfinish');
var ticketsRouter = require('./server/routes/tickets');
var ticketsAddRouter = require('./server/routes/ticketsAdd');
var guestCheckRouter = require('./server/routes/guestCheck');
var parkInfoRouter = require('./server/routes/parkInfo');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/cog', cogRouter);
app.use('/admin', adminRouter);
app.use('/adminpage', adminPageRouter);
app.use('/appinfo', appInfoRouter);
app.use('/contact', contactRouter);
app.use('/parkingIn', parkingInRouter);
app.use('/parkingOut', parkingOutRouter);
app.use('/timecheck', timeCheckRouter);
app.use('/pay', payRouter);
app.use('/payfinish', payFinishRouter);
app.use('/tickets', ticketsRouter);
app.use('/ticketsadd', ticketsAddRouter);
app.use('/guestcheck', guestCheckRouter);
app.use('/parkinfo', parkInfoRouter);


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
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

module.exports = app;

app.listen(3000, function(){
  console.log('Connected');
})