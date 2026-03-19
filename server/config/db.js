const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log(process.env.MONGO_URI);
    process.exit(1); // Exit with failure
  } 
};      
module.exports = connectDB;