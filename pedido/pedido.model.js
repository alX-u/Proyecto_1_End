const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    domiciliary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      validate: {
        validator: async function (v) {
          const user = await mongoose.model("users").findById(v);
          if (!user || user.type !== "domiciliario") {
            throw new Error("El usuario no es de tipo domiciliario");
          }
        },
      },
    },
    products: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        amount: {
          type: Number,
          default: 1,
        },
      },
    ],
    sent: { type: Boolean, default: false },
  },
  { timestamps: true, collection: "deliveries" }
);

module.exports = mongoose.model("deliveries", deliverySchema);
