const Pedido = require("./pedido.model");

//Creación de producto
async function createDelivery(req, res) {
  try {
    const { client, restaurant, products } = req.body;
    const pedido = new Pedido({
      client,
      restaurant,
      products,
    });
    const resultado = await pedido.save();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json(error);
  }
}

//Obtener producto por el ID
async function getDeliveryById(req, res) {
  try {
    const { _id } = req.params;

    const resultado = await Pedido.findById(_id);

    res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
  }
}

//Actualizar producto
async function updateDelivery(req, res) {
  //Aquí opto por usar tanto params como body
  const { _id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await Pedido.findByIdAndUpdate(_id, updates, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Error al actualizar el usuario." });
  }
}

//Borrar productos
async function deleteDelivery(req, res) {}

module.exports = { createDelivery, getDeliveryById, updateDelivery };
