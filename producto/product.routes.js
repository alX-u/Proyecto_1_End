//Importamos las funciones
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("./product.controller");

const { Router } = require("express");
const router = Router();

// Endpoint GET (Todos los restaurantes)
router.get("/", getProduct);

// Endpoint POST (Crear un Restaurante)
router.post("/", createProduct);

// Endpoint PATCH (Actualizar un Restaurante)
router.patch("/", updateProduct);

// Endpoint DELETE (Inhabilitar un Restaurante)
router.delete("/", deleteProduct);

module.exports = router;
