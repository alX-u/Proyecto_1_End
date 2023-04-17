const Usuario = require("./usuario.model");

//Creación de usuarios
async function createUser(req, res) {
  try {
    const { username, password, email, phone_number, address, role } = req.body;
    const user = new Usuario({
      username,
      //Hay que hashear la contraseña
      password,
      //Verificar el email
      email,
      phone_number,
      address,
      role,
    });
    const resultado = await user.save();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json(error);
  }
}

//Obtener usuarios
async function getUser(req, res) {
  try {
    const users = await Usuario.find(req.query);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
}

//Actualizar usuarios
async function updateUser(req, res) {
  //Aquí opto por usar tanto params como body
  const { _id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await Usuario.findByIdAndUpdate(_id, updates, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Error al actualizar el usuario." });
  }
}

//Borrar usuarios
async function deleteUser(req, res) {
  //Aquí uso params
  const { _id } = req.params;

  try {
    //El usuario se inhabilita, en vez de borrarse
    const deletedUser = await Usuario.findByIdAndUpdate(_id, { active: false });
    if (!deletedUser)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.status(200).json({ message: "Usuario inhabilitado correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
