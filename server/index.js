import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/userRoutes.js";
import courseRoute from "./routes/courseRoutes.js";

dotenv.config({});

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}));

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    }catch(e){
        console.log(e);
    }
};

connectDB();

app.use("/user",userRoute);
app.use("/course",courseRoute);

app.listen(process.env.PORT,()=>{
    console.log("server start ");
});

