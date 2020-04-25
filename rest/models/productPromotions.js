const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromotionProductSchema = mongoose.Schema({
    code: { type: String, required: true},
    active: { type: Boolean, required: true,default:false},
    discount: { type: String, required: true},
    products_id:[{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('PromotionProduct', PromotionProductSchema);

