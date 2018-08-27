// Node Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

// Routes
const indexRouter = require('./routes/index');

// Express Application
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logger using moragn
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

// 404 Middleware
app.use(function(req, res, next) {
  next(createError(404));
});

// Error Middleware
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.sendFile('error.html', {root: path.join(__dirname, 'html')});
});

module.exports = app;
