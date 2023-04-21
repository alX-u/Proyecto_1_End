const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./usuario/usuario.routes");
const restaurantRoutes = require("./restaurante/restaurante.routes");
const productRoutes = require("./producto/producto.routes");

//Creación de la app
const app = express();

//Esta es mi conexión a MongoDB
const url =
  "mongodb+srv://" +
  process.env.MONGO_USER +
  ":" +
  process.env.MONGO_PASS +
  "@clusterproyecto1end.1ev3dnt.mongodb.net/test";

async function connect() {
  try {
    await mongoose.connect(url).then(() => {
      console.log("DataBase Connected");
      app.listen(8080, () => {
        console.log("App Listened on port 8080");
      });
    });
  } catch (error) {
    console.log(error);
  }
}

connect();

// Middlewares
app.use(cors());
app.use(express.json());

//Rutas de usuarios
app.use("/users", userRoutes);
//Rutas de restaurantes
app.use("/restaurants", restaurantRoutes);
//Rutas de productos
app.use("/products", productRoutes);

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});
