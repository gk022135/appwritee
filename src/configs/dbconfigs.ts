

import mongoose from "mongoose";

let isConnected = false; // Prevent multiple connections

export async function connect() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  

  try {
    
    await mongoose.connect("mongodb://localhost:27017");
    isConnected = true;
    if(isConnected){
        console.log("MongoDB connected successfully ✅");
    }

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully ✅");
    });

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error ❌", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Error occurred in DB connection ❌", error);
  }
}
