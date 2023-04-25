const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: { type: String, required: true },
    description: { type: String, maxlength: 48 },
    category: { type: String, require: true },
    price: { type: Number, required: true },
    restaurante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
      validate: {
        validator: async function (value) {
          const restaurant = await mongoose.model("restaurant").findOne({
            _id: value,
          });
          return restaurant !== null;
        },
        message: "Restaurante no encontrado",
      },
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "products" }
);

module.exports = mongoose.model("product", productSchema);
