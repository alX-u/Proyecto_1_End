const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    address: { type: String, required: true },
    category: [{ type: String, required: true }],
    number_of_deliveries: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "restaurants" }
);

module.exports = mongoose.model("restaurant", restaurantSchema);
