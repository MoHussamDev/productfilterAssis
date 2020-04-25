// departments controller routes
var express = require('express');
var router = express.Router();
var filterService = require('../services/filter.service'); 


router.get('/',filterService.allPromotions);


module.exports = router;