import expres from "express";

const router = expres.Router();

router.get("/", createUser);