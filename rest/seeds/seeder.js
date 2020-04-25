const DepartmentsData = require('./departments');
const ProductsData = require('./products');
const PromotionsData = require('./promotions');
const Departments = require('../models/department');
const Products = require('../models/products');
const Promotions = require('../models/productPromotions');
 
const SeedDepartments = async () => {
    const count = await Departments.countDocuments()
    if(!count){
        for(i=0 ; i < DepartmentsData.length ;i++ ){
                const addDepartment = new Departments({
                        name:DepartmentsData[i]
                    })
                    await addDepartment.save();
                }  
                console.log("departments Added");
                return seedProducts()
            }
            console.log("Data Is Already Seeded");
        }

const seedProducts= async ()=>{
    for(i=0 ; i < ProductsData.length ; i++){
        let departmentId = await Departments.findOne({name:ProductsData[i].department})
        departmentId = departmentId._id
        let newProduct = new Products({
           name: ProductsData[i].name,
           price:ProductsData[i].price,
           department_id: departmentId
        })
        await newProduct.save();
    }
    console.log('products Added ');
    return seedPromotions();
}

const seedPromotions = async ()=>{
    for(i=0;i < PromotionsData.length ; i++){
     let ProductsIds = []
      for(p=0 ;p < PromotionsData[i].product.length; p++){
        let productId = await Products.findOne({name:PromotionsData[i].product[p]})
        productId = productId._id
        if(ProductsIds.indexOf(productId) ===  -1){

            ProductsIds.push(productId)
        }
    }
    let newPromotion = new Promotions({
        code:PromotionsData[i].code,
        active:PromotionsData[i].active,
        discount:PromotionsData[i].discount,
        products_id:ProductsIds
    })

    let promotion = await newPromotion.save()
    for(n=0 ; n < ProductsIds.length ; n++){
        var findProduct = await Products.findById(ProductsIds[n]);
        if(findProduct.promotions_id.indexOf(promotion._id) ===  -1){

            await Products.updateOne(
                { "_id": ProductsIds[n]},
                { "$push": { "promotions_id": promotion._id }},
                )
            }
       }

  }
}

module.exports = {SeedDepartments}