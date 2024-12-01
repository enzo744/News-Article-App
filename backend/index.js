import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).
then(() => {
  console.log("Il database news_portal_db è stato connesso");
}).catch((err) => {
  console.log(err);
});

const app = express();

// for allowing json object in req body - consentire l'oggetto json nel body
app.use(express.json());


app.listen(3005, () => {
  console.log("Server is running on port 3005");
});

app.use("/api/auth", authRoutes);