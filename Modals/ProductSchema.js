const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    asin: { type: String,unique:true },
    img: { type: String },
    title: { type: String },
    buyBoxPrice: { type: Number },
    fba: { type: Number },
    fbm: { type: Number },
    isFBA: { type: Boolean },
    monthlySold: { type: String },
    price: { type: Number },
    salesrank:{type: Number },
    averagePrice:{type: Number},
    stockcounts: [String],
    category:{type: String},
    isamazon:{type: Boolean},
    rating:{type: Number},
    graphImageUrl:{type: String},
    totaloffercount:{type: Number},
    date:{type:String},
    isSaved: {
        type: Boolean,
        default: false,
      },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    sellerId:{
          type:mongoose.Schema.Types.ObjectId,
        ref:"Seller"
    }

})


const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;