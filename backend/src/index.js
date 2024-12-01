import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"; // why .js
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js" // why bracket    

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT
app.use("/api/auth",authRoutes); // what is this? why api/auth
app.use("/api/auth", messageRoutes);

app.listen(PORT, ()=>{
    console.log("Server is running on port: "+ PORT);
    connectDB();
}); 