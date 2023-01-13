import { Request, Response } from "express";
import { Employee } from "../entities/Employee";

export const getAllEmployee = async (req: Request, res: Response) => {
  const allService = await Employee.find();

  if (!allService.length) {
    try {
      const allEmployeFromDb = await Employee.createQueryBuilder()
        .insert()
        .into(Employee)
        .values([
          {
            id: 1,
            firstName: "Carlos",
            lastName: "Gallego",

            email: "Carlos@gmail.com",
            address: "carrera 14 #3-33",
          },
          {
            id: 2,
            firstName: "Andres",
            lastName: "Ceron",

            email: "Andres@gmail.com",
            address: "calle 88 #3-33",
          },
          {
            id: 3,
            firstName: "Rogri",
            lastName: "Melo",

            email: "Rodri@gmail.com",
            address: "calle 14 #3-33",
          },
          {
            id: 4,
            firstName: "Steven",
            lastName: "Ceron",

            email: "Steven@gmail.com",
            address: "calle 89 #3-33",
          },
        ])
        .execute();
      return res.status(200).send(allEmployeFromDb);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  } else {
    try {
      const services = await Employee.find();
      return res.json(services);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
};
