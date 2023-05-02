//Importamos las funciones
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductbyId,
  getProductsbyRestaurantAndCategory,
} = require("./producto.controller");

const { Router } = require("express");
const router = Router();

// Endpoint GET (Unidad por ID)
router.get("/byID/:_id", getProductbyId);

router.get("/byRestaurantAndCategory", getProductsbyRestaurantAndCategory);

// Endpoint POST (Crear un producto)
router.post("/", createProduct);

// Endpoint PATCH (Actualizar un producto)
router.patch("/:_id", updateProduct);

// Endpoint DELETE (Inhabilitar un producto)
router.delete("/:_id", deleteProduct);

module.exports = router;
