//Importamos las funciones
const {
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getRestaurantById,
  getRestaurants,
  getRestaurantByCategory,
} = require("./restaurante.controller");

const { Router } = require("express");
const router = Router();

// Endpoint GET (Todos los restaurantes)
router.get("/allRestaurants", getRestaurants);

// Endpoint GET (Por _id)
router.get("/:_id", getRestaurantById);

// Endpoint GET (Múltiples / Por categoría)
router.get("/byCategory/:category", getRestaurantByCategory);

// Endpoint POST (Crear un Restaurante)
router.post("/", createRestaurant);

// Endpoint PATCH (Actualizar un Restaurante)
router.patch("/:_id", updateRestaurant);

// Endpoint DELETE (Inhabilitar un Restaurante)
router.delete("/:_id", deleteRestaurant);

module.exports = router;
