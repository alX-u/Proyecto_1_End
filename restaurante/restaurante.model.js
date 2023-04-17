const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      unique: true,
      required: true,
    },
    address: { type: String, required: true },
    category: [{ type: String, required: true }],
  },
  { timestamps: true, collection: "restaurants" }
);
