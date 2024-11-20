const mongoose = require("mongoose");
const userProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
    required: true,
  },
  productIds: [
    {
      type: String,
      required: true,
    },
  ],
});

const UserProductIds = mongoose.model("UserProductIds", userProductSchema);

module.exports = UserProductIds;
