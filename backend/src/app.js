import express from "express";
import { database } from "./config/database.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
database;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
  console.log("http://localhost:3000/");
});