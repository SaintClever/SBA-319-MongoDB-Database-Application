import mongoose from "mongose";
import { userSchema } from "../schemas/userSchema.js";

const User = mongoose.model("User", userSchema);

export { User };