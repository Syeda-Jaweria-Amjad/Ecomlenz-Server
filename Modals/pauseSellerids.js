const mongoose = require("mongoose");

const pauseSellerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  pauseSellerIds: [ 
    {
      type: String,
      required: true,
    },
  ],
});

const PauseSellerids = mongoose.model("pauseSellerids", pauseSellerSchema);

module.exports = PauseSellerids;
