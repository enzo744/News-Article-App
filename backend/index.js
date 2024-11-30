import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).
then(() => {
  console.log("Il database news_portal_db è stato connesso");
}).catch((err) => {
  console.log(err);
});

const app = express();


app.listen(3005, () => {
  console.log("Server is running on port 3005");
});