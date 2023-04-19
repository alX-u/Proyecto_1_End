const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: { type: String, require: true },
    description: { type: String, maxlength: 48 },
    category: { type: String },
    price: { type: Number, require: true },
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: "restaurants" },
  },
  { timestamps: true, collection: "products" }
);

module.exports = mongoose.model("product", productSchema);
