// departments controller routes
var express = require('express');
var router = express.Router();
var filterService = require('../services/filter.service'); 

// get /api/departments/
router.post('/',filterService.listProducts);


module.exports = router;