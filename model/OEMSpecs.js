const mongoose = require("mongoose");

const oemSpecsSchema = mongoose.Schema({
  modelName: { type: String, required: true },
  yearOfModel: {
    type: Number,
    required: true,
    min: 1700,
    max: new Date().getFullYear(),
  },
  price: {
    type: Number,
    required: true,
  },
  colors: [String],
  mileage: { type: Number, required: true },
  power: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
});

const OEM_SpecsModel = mongoose.model("Specs", oemSpecsSchema);

module.exports = OEM_SpecsModel;
