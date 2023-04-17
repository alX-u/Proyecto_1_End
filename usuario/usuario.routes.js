//Importamos las funciones
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("./usuario.controller");

const { Router } = require("express");
const router = Router();

// Endpoint GET /prueba
router.get("/", getUser);

// Endpoint POST /prueba
router.post("/", createUser);

// Endpoint PATCH /prueba
router.patch("/:_id", updateUser);

// Endpoint DELETE /prueba
router.delete("/:_id", deleteUser);

module.exports = router;
