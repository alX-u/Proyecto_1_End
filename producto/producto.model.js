const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: { type: String, require: true },
    price: { type: Number, require: true },
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: "restaurants" },
  },
  { timestamps: true, collection: "products" }
);

module.exports = mongoose.model("product", productSchema);
