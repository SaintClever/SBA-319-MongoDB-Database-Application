import expres from "express";
import { createUser, readUser } from "../controllers/userController.js";

const router = expres.Router();

router.post("/", createUser);
router.get("/api", readUser);

export { router as userRoutes };