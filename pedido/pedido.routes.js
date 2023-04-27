const {
  createDelivery,
  getDeliveryById,
  getDeliveryByQuery,
  getNotAcceptedDeliveries,
  updateDelivery,
  deleteDelivery,
} = require("./pedido.controller");

const { Router } = require("express");
const router = Router();

// Endpoint POST (Crear un pedido)
router.post("/", createDelivery);

// Endpoint GET (Obtener por _id)
router.get("/byID/:id", getDeliveryById);

// Endpoint GET (Obtener por cliente, restaurante, domiciliario)
router.get("/byQuery", getDeliveryByQuery);

// Endpoint GET (Obtener por _id)
router.get("/byNotAcceptedDeliveries", getNotAcceptedDeliveries);

// Endpoint PATCH (Actualizar un pedido)
router.patch("/:_id", updateDelivery);

// Endpoint DELETE (Inhabilitar un pedido)
router.delete("/:_id", deleteDelivery);

module.exports = router;
