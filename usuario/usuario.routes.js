//Importamos las funciones
const {
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  getUserByEmailAndPassword,
} = require("./usuario.controller");

const { Router } = require("express");
const router = Router();

// Endpoint GET /prueba
router.get("/:_id", getUserById);

// Endpoint GET (Email y Contraseña)
router.get("/", getUserByEmailAndPassword);

// Endpoint POST /prueba
router.post("/", createUser);

// Endpoint PATCH /prueba
router.patch("/:_id", updateUser);

// Endpoint DELETE /prueba
router.delete("/:_id", deleteUser);

module.exports = router;
