import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const database = mongoose.connect(MONGODB_URI, {"dbname": "library"}).then(() => {
  console.log("Mongoose Connection Successful!");
}).catch(() => {
  console.log("Mongoose Connection Failed!");
});

export { database };