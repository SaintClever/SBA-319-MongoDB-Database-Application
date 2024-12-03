import expres from "express";
import { createUser, readUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = expres.Router();

router.post("/", createUser);
router.get("/api", readUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

export { router as userRoutes };