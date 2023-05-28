const mongoose = require("mongoose");

const marketplaceInventorySchema = mongoose.Schema({
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Specs",
  },
  postedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  modelName:{type:String,required:true},
  color:{type:String},
  image: { type: String } ,
  description:{type:String,required:true},
  odometerKMs: { type: Number, required: true },
  majorScratches: { type: Boolean, default: false },
  originalPaint: { type: Boolean, default: true },
  accidentsReported: { type: Number, default: 0, required: true },
  previousBuyers: { type: Number, default: 0, required: true },
  registrationPlace: { type: String, required: true },
});

const MarketplaceInventory = mongoose.model(
  "MarketplaceInventory",
  marketplaceInventorySchema
);

module.exports = MarketplaceInventory;
