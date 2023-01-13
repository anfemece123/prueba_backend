import { Router } from "express";
import { getAllEmployee } from "../controllers/employe.controllers";

const router = Router();

router.get("/allEmployee", getAllEmployee);

export default router;
