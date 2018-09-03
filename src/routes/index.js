/*jslint node: true*/

const express = require('express');
const router = express.Router();
const path = require('path');
const logger = require('../utils/logger');
const testjson = require('../utils/data/projects.json');

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

router.get('/about', function(req, res, next) {
  res.render('about', 
    function(error, html){
    // error rendering 'about' template
      if(error){
        logger.error('Error rendering about template"');
        next(error);
      }
      // no error send rendered template
      res.send(html);
    }
  );
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {projects: testjson},
    function(error, html){
      // error rendering 'error' template
      if(error){
        logger.error('Error rendering projects template"');
        next(error);
      }
      // no error send rendered template
      res.send(html);
    }
  );
});

router.get('/contact', function(req, res, next) {
  res.sendFile(
    'contact.html', 
    {root: path.join(__dirname, '../html')},
    function(err){
      if(err){
        logger.error('Failed to send contact page');
      next(err);
      }
    }
  );
});


router.get('/error', function(req, res, next) {
  res.sendFile('./inde.html');
});

module.exports = router;
