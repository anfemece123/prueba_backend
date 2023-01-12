import { Router } from "express";
import { getAllService } from "../controllers/service.controllers";

const router = Router();

router.get("/allService", getAllService);

export default router;
