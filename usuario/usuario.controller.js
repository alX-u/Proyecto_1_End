const Usuario = require("./usuario.model");

//Creación de usuarios
async function createUser(req, res) {
  try {
    const { name, password, email, phone_number, address, role } = req.body;
    const user = new Usuario({
      name,
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

//Obtener usuario
async function getUserById(req, res) {
  try {
    //Para usuario admin
    const { _id } = req.params;

    const user = await Usuario.findOne({ _id: _id, active: true });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
}

//Obtener usuario por email y contraseña
async function getUserByEmailAndPassword(req, res) {
  try {
    //Inicio de Sesión
    const { email, password } = req.query;

    //Buscamos el usuario en base a su email
    const user = await Usuario.findOne({ email, active: true });

    //Comprobamos que la contraseña sea correcta
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Contraseña incorrecta");

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
}

//Actualizar usuarios
async function updateUser(req, res) {
  //Aquí opto por usar tanto params como body
  const { _id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await Usuario.findByOneAndUpdate(
      { _id: _id, active: true },
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
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
    const deletedUser = await Usuario.findByOneAndUpdate(
      { _id: _id, active: true },
      { active: false }
    );
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
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmailAndPassword,
};
