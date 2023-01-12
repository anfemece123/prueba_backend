import { Router } from "express";
import { createUser, getUsers, prueba } from "../controllers/user.controllers";

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/prueba", prueba);

export default router;
