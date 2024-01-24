const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongoose Schema
const prdoductSchema = new Schema({
    title: {type:String, required:true,unique:true},
    description: {type:String, required:true},
    price: {
        type: Number,
        min: [0,'Wrong Price'],
        required:true
    },
    discountPercentage: {
        type: Number,
        min: [0, 'Discount cannot be negative'],
        max: [50,'Maximum Discount limit exceed']
    },
    rating:  {
        type: Number,
        min: [0, 'Rating cannot be negative'],
        max: [5,'Maximum Rating limit exceed'],
        default:1
    },
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: {type:String, required:true},
    images: [String]
});

//Mongoose Model
exports.Product = mongoose.model('Product', prdoductSchema);