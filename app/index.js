import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = "../connectDB.js";
import userRoutes from "./routes/userRoute.js"
dotenv.config();
const app = express();
// connectDB()

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log(`Database connected `);
    })
    .catch((err) => {
        console.log(`Encounterd an error: ${err} `);
    });



app.use("/app/user", userRoutes)






app.listen(5174, () => {
    console.log(`Server Running`);
});
