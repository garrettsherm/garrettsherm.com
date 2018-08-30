const { format, createLogger, transports } = require('winston');
const { combine, timestamp, label, json, simple } = format;

// default logging to files
//  writes to files './logs/errors.log' & './logs/combined.log'
// *-errors.log only includes error >= 500
// *-combined.log includes info & error
// no logs printed to console by default, conditional console logging in ~app.js
const logger = createLogger({
	transports: [
		// error log to file
		new transports.File({
			level: 'error',
			filename: './logs/error.log',
			handleExceptions: true,
			json: true,
			maxsize: 5242880,
			maxFiles: 5,
			colorize: false,
			format: combine(
				timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
				json()
			)
		}),
		// combined log to file
		new transports.File({
			level: 'info',
			filename: './logs/combined.log',
			handleExceptions: true,
			json: true,
			maxsize: 5242880,
			maxFiles: 5,
			colorize: false,
			format: combine(
				timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
				json()
			)
		})
	],
	exitOnError: false
});



module.exports = logger;

// steam messages to error level only
module.exports.streamError = {
	write: function(message, encoding){
		logger.error(message);
	}
};

// steam messages to info level and below
module.exports.streamInfo = {
	write: function(message, encoding){
		logger.info(message);
	}
};
