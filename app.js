var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

const mongoose = require('mongoose');

var managerRouter = require('./routes/manager');
var employeeRouter = require('./routes/employee');
var departmentRouter = require('./routes/department');
var aggregationRouter = require('./routes/aggregation');


var app = express();


app.use(logger('dev'));

//connect to DB
mongoose.connect('mongodb+srv://mohamedElmanakhly:mody222000@mohamed.lxfn7.mongodb.net/company?retryWrites=true&w=majority', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected .....')
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/manager', managerRouter);
app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);
app.use('/aggregation', aggregationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;