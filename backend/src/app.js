import express from "express";
import { database } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  console.log(database)
  res.send("Hello");
});


app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
  console.log("http://localhost:3000/");
});