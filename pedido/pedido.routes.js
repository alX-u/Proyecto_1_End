const { createDelivery, getDeliveryById } = require("./pedido.controller");

const { Router } = require("express");
const router = Router();

// Endpoint POST (Crear un pedido)
router.post("/", createDelivery);

// Endpoint GET (Obtener por _id)
router.get("/byID/:id", getDeliveryById);

module.exports = router;
