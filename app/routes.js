var express = require('express');
var router = express.Router();

var dataController = require('./controllers/dataController');

//a simple get data
router.get('/api/v1/test',dataController.fetchResults);