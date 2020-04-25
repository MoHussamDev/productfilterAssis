// departments controller routes
var express = require('express');
var router = express.Router();
var filterService = require('../services/filter.service'); 

// get /api/departments/
router.get('/',filterService.allDepartments);


module.exports = router;