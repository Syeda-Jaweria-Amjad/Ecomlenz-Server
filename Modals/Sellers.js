const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  sellerId: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
  pauseStatus: {
    status: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  newProductCount: {
    type: Number,
    default: 0,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  isSaved: {
    type: Boolean,
    default: false,
  },
  // products: [
  //   {
  //     asin: { type: String },
  //     img: { type: String },
  //     title: { type: String },
  //     buyBoxPrice: { type: Number },
  //     fba: { type: Number },
  //     fbm: { type: Number },
  //     isFBA: { type: Boolean },
  //     monthlySold: { type: String },
  //     price: { type: Number },
  //     salesrank:{type: Number },
  //     averagePrice:{type: Number},
  //     stockcounts: [String],
  //     category:{type: String},
  //     isamazon:{type: Boolean},
  //     rating:{type: Number},
  //     graphImageUrl:{type: String},
  //     totaloffercount:{type: Number},
  //     date:{type:String},

  //   },
  // ],
  // userIds: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "users", // Array of users associated with the seller
  //     required: true,
  //   },
  // ],
});

const SellerData = mongoose.model("Seller", sellerSchema);

module.exports = SellerData;
