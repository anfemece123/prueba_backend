import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controllers";

const router = Router();

router.post("/orders", createOrder);
router.get("/allOrders", getOrders);

export default router;
