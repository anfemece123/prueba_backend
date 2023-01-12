import { Request, Response } from "express";
import { User } from "../entities/User";
const { generateJWT, verifyJwt } = require("../utils/jwt");

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName } = req.body;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();

    console.log(user);
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const prueba = async (req: Request, res: Response) => {
  try {
    const token = await generateJWT({ uid: "anfemece123" }, "15m");
    console.log(token);
    // const verify = await verifyJwt(token);
    // console.log(verify);
    // return res.json({ token, verify });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
