const Product = require("./producto.model");

//Creación de usuarios
async function createProduct(req, res) {
  res.status(200).json({ message: "OK" });
}

//Obtener usuario
async function getProduct(req, res) {
  res.status(200).json({ message: "OK" });
}

//Actualizar usuarios
async function updateProduct(req, res) {
  res.status(200).json({ message: "OK" });
}

//Borrar usuarios
async function deleteProduct(req, res) {
  res.status(200).json({ message: "OK" });
}

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
