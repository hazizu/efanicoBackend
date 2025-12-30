const express = require("express");
const connectDB = require("./databaseConfig/database");
const prestataireEfanicoRoutes = require("./Routes/prestataireEfanicoRoutes");
const pressingEfanicoRoutes = require("./Routes/pressingEfanicoRoutes");
const competenceEfanicoRoutes = require("./Routes/competenceEfanicoRoutes");
const clotheEfanicoRoutes = require("./Routes/clotheEfanicoRouter");
const authUserRoutes = require("./Routes/authRouter");
const userRoutes = require("./Routes/user");
const reservationRouter = require("./Routes/reservationRouter");
const uploadRouter = require("./Routes/uploadRouter");

const app = express();

// Connexion à MongoDB
connectDB();

app.use(express.json());

// Routes
app.use("/authUser", authUserRoutes);
app.use("/user", userRoutes);
app.use("/prestataireFanico", prestataireEfanicoRoutes);
app.use("/pressingFanico", pressingEfanicoRoutes);
app.use("/competenceFanico", competenceEfanicoRoutes);
app.use("/clothesFanico", clotheEfanicoRoutes);
app.use("/userReservation", reservationRouter);
app.use("/media", uploadRouter); 



app.listen(3000, () => {
  console.log("🚀 Serveur lancé sur le port 3000");
});

