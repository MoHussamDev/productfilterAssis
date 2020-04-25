var express     = require('express');
var bodyParser  = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const {SeedDepartments} = require('./seeds/seeder');


var app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers


var departmentsController = require('./controllers/departmentsController');
var promotionController = require('./controllers/PromotionsController');
var productController = require('./controllers/ProductController');




const dotenv = require("dotenv");
dotenv.config();  


require("mongodb");
require("mongodb").MongoClient;
require("./config/mongoose");
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/departments', departmentsController);
app.use('/api/promotion', promotionController);
app.use('/api/products', productController);

SeedDepartments()


app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});