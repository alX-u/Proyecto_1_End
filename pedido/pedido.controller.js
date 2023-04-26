const Pedido = require("./pedido.model");

//Creación de pedido
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

//Obtener pedido por el ID
async function getDeliveryById(req, res) {
  try {
    const { _id } = req.params;

    const resultado = await Pedido.findById(_id, { active: true });

    res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
  }
}

//Obtener pedidos realizados, enviados, pedidos y/o entre las fechas proveídas
async function getDeliveryByQuery(req, res) {

}

//Obtener pedidos enviados pero no aceptados
async function getNotAcceptedDeliveries(req, res) {
  try {
    const resultado = await Pedido.find({
      sent: true,
      domiciliary: { $exists: false },
      active: true,
    });
    res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
  }
}

//Actualizar pedido
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

//Borrar pedidos
async function deleteDelivery(req, res) {
  //Aquí uso params
  const { _id } = req.params;

  try {
    //El restaurante se inhabilita, en vez de borrarse
    const deletedDelivery = await Pedido.findByIdAndUpdate(_id, {
      active: false,
    });
    if (!deletedDelivery)
      return res.status(404).json({ message: "Pedido no encontrado" });

    res.status(200).json({ message: "Pedido inhabilitado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el pedido" });
  }
}

module.exports = {
  createDelivery,
  getDeliveryById,
  getNotAcceptedDeliveries,
  updateDelivery,
  deleteDelivery,
};
