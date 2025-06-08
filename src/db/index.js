import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      family: 4,
    });
    console.log(`Connected to MongoDB!! DB HOST: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}
export default connectDB;