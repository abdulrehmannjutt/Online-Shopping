const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
   
})

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;