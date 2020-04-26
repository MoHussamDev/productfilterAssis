var Depart = require('../models/department');
var Product =require('../models/products');
var Promotions = require('../models/productPromotions');

exports.allDepartments = async (req,res)=>{
    try{
        var allProductCats = await Product.find().distinct('department_id')
        var allDeparts = await Depart.find().where('_id').in(allProductCats)
        res.status(200).send({err:false,data:allDeparts,haw:'asd'})
    }catch(er){
        res.status(200).send({err:true,data:{}})
    }
    }

exports.allPromotions = async (req,res)=>{
        var allProductPromotions = await Product.find().distinct('promotions_id')
        var allPromotions = await Promotions.find().where('_id').in(allProductPromotions)
        var newPromotions = [
            { active: true,
                products_id:[],
                _id: "",
                 code: 'Any',
                 discount: '',
               },
               ...allPromotions
        ]
        console.log(newPromotions)
        res.status(200).send({err:false,data:newPromotions,haw:'asd'})
    }

exports.listProducts = async (req,res)=>{

        let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
    if( req.body.filters.name.length > 0){

        findArgs.name= {$regex : req.body.filters.name, $options:'i'} 
    }
    if( req.body.filters.department_id.length  > 0){

        findArgs.department_id = req.body.filters.department_id
    }
    if( req.body.filters.promotions_id.length  > 0){

        findArgs.promotions_id = req.body.filters.promotions_id
    }


 try{
     var products = await Product.find(findArgs)
     .populate("promotions_id")
     .populate("department_id")
     .sort([[sortBy, order]])
     .skip(skip)
     .limit(limit)
     .exec();
     var ProductSizes = await Product.find(findArgs)  
        
     res.status(200).send({err:false , data :{
         size: ProductSizes.length,
         data : products
        }});
    }catch(e){
        return res.status(400).json({
            error: "Products not found"
           });
    }
    }