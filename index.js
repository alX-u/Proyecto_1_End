const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./usuario/usuario.routes");

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

app.use("/user", userRoutes);

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});
