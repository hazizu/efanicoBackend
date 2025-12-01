const express = require("express");
const connectDB = require("./databaseConfig/database");
const prestataireEfanicoRoutes = require("./Routes/prestataireEfanicoRoutes");

const app = express();

// Connexion à MongoDB
connectDB();

app.use(express.json());

// Routes
app.use("/prestataireFanico", prestataireEfanicoRoutes);


app.listen(3000, () => {
  console.log("🚀 Serveur lancé sur le port 3000");
});

