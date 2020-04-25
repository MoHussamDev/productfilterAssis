const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: { type: String, required: true},
    department_id:{ type: Schema.Types.ObjectId, ref: 'Department' },
    promotions_id:[{ type: Schema.Types.ObjectId, ref: 'PromotionProduct' }]
});

module.exports = mongoose.model('Product', ProductsSchema);

