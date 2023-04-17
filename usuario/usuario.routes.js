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
router.post("/createUser", createUser);

// Endpoint PATCH /prueba
router.patch("/", updateUser);

// Endpoint DELETE /prueba
router.delete("/deleteUser/:_id", deleteUser);

module.exports = router;
