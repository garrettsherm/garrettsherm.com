const express = require('express');
const router = express.Router();
const path = require('path');
const logger = require('../utils/logger')

router.get('/', function(req, res, next) {
  res.sendFile(
  	'index.html', 
  	{root: path.join(__dirname, '../html')},
  	function(err){
 			if(err){
 				logger.error('Failed to send home page');
  			next(err);
  		}

  	}
  );
});

module.exports = router;
