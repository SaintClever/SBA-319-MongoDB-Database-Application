import mongoose from "mongose";
import { userSchema } from "../schemas/userSchema.js";

const UserModel = mongoose.model("User", userSchema);

export { UserModel };