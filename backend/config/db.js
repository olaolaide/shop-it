import mongoose from "mongoose";
import {Env} from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(Env.MONGO_URI)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
    }
}

export const disconnectDB = async () => {
    try {
        await mongoose.disconnect()
    } catch (err) {
        console.log(err)
    }
}