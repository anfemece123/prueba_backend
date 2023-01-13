import { Request, Response } from "express";
import { Order } from "../entities/Order";
import { Service } from "../entities/Service";
const { generateJWT } = require("../utils/jwt");
// const jwt = require("jsonwebtoken");

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { service, total } = req.body;
    const token = await generateJWT({ uid: service }, total);
    // const token = jwt.sign({ service, total });

    const order = new Order();
    order.service = service;
    order.total = total;
    order.token = token;
    await order.save();
    console.log(order);
    return res.json(order);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
