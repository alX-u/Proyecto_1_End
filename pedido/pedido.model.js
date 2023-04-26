const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      validate: {
        validator: async function (v) {
          const user = await mongoose.model("user").findById(v);
          if (!user || user.type !== "Cliente") {
            throw new Error("El usuario no es de tipo Cliente");
          }
        },
      },
    },
    restaurant: {
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
    domiciliary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      validate: {
        validator: async function (v) {
          const user = await mongoose.model("user").findById(v);
          if (!user || user.type !== "Domiciliario") {
            throw new Error("El usuario no es de tipo Domiciliario");
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
          validate: {
            validator: async function (value) {
              const restaurant = await mongoose.model("product").findOne({
                _id: value,
              });
              return restaurant !== null;
            },
            message: "Restaurante no encontrado",
          },
        },
        amount: {
          type: Number,
          default: 1,
        },
      },
    ],
    sent: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "deliveries" }
);

module.exports = mongoose.model("deliveries", deliverySchema);
