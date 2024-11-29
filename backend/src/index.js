import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"; // why .js
import {connectDB} from "./lib/db.js" // why bracket

dotenv.config();
const app=express();

const PORT=process.env.PORT
app.use("/api/auth",authRoutes); // what is this? why api/auth

app.listen(PORT, ()=>{
    console.log("Server is running on port: "+ PORT);
    connectDB();
}); 