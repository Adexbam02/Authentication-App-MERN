import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = "../connectDB.js";
import userRoutes from "./routes/userRoute.js"
import authRoutes from "./routes/authRoute.js"
dotenv.config();
const app = express();

app.use(express.json())
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
app.use("/app/auth", authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})




app.listen(5174, () => {
    console.log(`Server Running`);
});
