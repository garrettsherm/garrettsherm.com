// Node Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const winston = require('winston');
const helmet = require('helmet');

// Routes
const indexRouter = require('./routes/index');

// Express Application
const app = express();

//Disable x-powered-by header for security
app.disable('x-powered-by');

// winston logger
const logger = require('./utils/logger');

// logging based on environment
// Production logging
if(process.env.NODE_ENV === 'production'){
  // add console logger for production (error only)
  logger.add(new winston.transports.Console({
    level: 'error',
    handleExceptions: true,
    json: false,
    format: winston.format.combine(
      winston.format.simple()
    )
  }));

  // morgan http errors only, stream to winston for file saving & console
	app.use(morgan('combined', 
		{
			skip: function(req, res){
				return res.statusCode < 400
			},
			stream: logger.streamError
		}
	));
}
// Development logging
else{
  // add console logger for development (debug and under)
  logger.add(new winston.transports.Console({
    level: 'debug',
    handleExceptions: true,
    json: false,
    format: winston.format.simple()
  }));
  // morgan http info requests, stream to winston for file saving & console
  app.use(morgan('dev', {
    stream: logger.streamInfo
  }));
}

logger.debug('Winston & Morgan logging up and running')

// helmet only in production
// disable strict ssl for now until up and running
if(process.env.NODE_ENV === 'production'){
  app.use(helmet({
    hsts: false
  }));
  logger.info('helmet initialized');
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));
logger.debug('Static ~/public/ directory set')


// Use routes
app.use('/', indexRouter);
logger.debug('Routes ready')


// 404 Middleware
app.use(function(req, res, next) {

  logger.info(`404 page hit by url "${req.url}"`);

	res.status(404);
  // give template the url that caused 404
  res.sendFile(
    '404.html', 
    {root: path.join(__dirname, './html')},
    function(err){
      if(err){
        logger.error('Failed to send 404 page');
        next(err);
      }

    }
  );
});

// Error Middleware
app.use(function(err, req, res, next) {
  // variables to be used in ejs template
  // if development attach error message, otherwise string 'Error'
  res.locals.message =  process.env.NODE_ENV === 'development' ? err.message : 'Error';
  // if development attach error object, otherwise nothing
 	res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  logger.error(`Error occured at url "${req.url}"`, { errorMsg: err.message, errorStatus: err.status, url: req.url });

  res.status(500);
  res.render('error', 
  	function(error, html){
  		// error rendering 'error' template
  		if(error){
        logger.error(`Error rendering error template by url "${req.url}"`)
  			res.send('Error rendering "Error" template');
  		}
  		// no error send rendered template
  		res.send(html);
  	}
  );
});

module.exports = app;
