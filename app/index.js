const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = "../connectDB.js";

dotenv.config();
const app = express();
// connectDB()

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log(`Database connected `);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5174, () => {
  console.log(`Server Running`);
});
