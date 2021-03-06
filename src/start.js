// Based on ./bin/www script given in express generator

// Node Modules
const http = require('http');
const logger = require('./utils/logger');

// import variables from variables.env
require('dotenv').config({path: __dirname + '/variables.env'});

// Get Express app from app.js
const app = require('./app');

// Set Port
const port = normalizePort(process.env.PORT || '3001');
logger.debug(`Port ${port} set`);

app.set('port', port);

// Create http server using Express App
const server = http.createServer(app);

// listen on port
server.listen(port);

// on error print errors to console
server.on('error', onError);

// on successful listen
server.on('listening', onListening);


// Get normailzed port
function normalizePort(val) {

	const port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}

	return false;
}

// Print errors
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	switch (error.code) {
	case 'EACCES':
		logger.error(`${bind} requires elevated privileges`);
		process.exit(1);
		break;
	case 'EADDRINUSE':
		logger.error(`${bind} is already in use`);
		process.exit(1);
		break;
	default:
		throw error;
	}
}

// Successful listen
function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	logger.info(`Listening on ${bind}`);
}
