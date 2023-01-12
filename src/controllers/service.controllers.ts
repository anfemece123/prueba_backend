import { Request, Response } from "express";
import { Service } from "../entities/Service";

export const getAllService = async (req: Request, res: Response) => {
  const allService = await Service.find();

  if (!allService.length) {
    try {
      const allServiceFromDb = await Service.createQueryBuilder()
        .insert()
        .into(Service)
        .values([
          {
            id: 1,
            name: " Intallation North Bayou TV stand",
            description:
              "Installation North Bayou NB-P4 wall mount for TV/Monitor from 32 to 55 black",
            price: 10,
          },
          {
            id: 2,
            name: "Repair North Bayou TV stand",
            description:
              "Repair North Bayou NB-P4 wall mount for TV/Monitor from 32 to 55 black",
            price: 20,
          },
          {
            id: 3,
            name: "Intallation Ergonomus TV stand",
            description:
              "Intallation Ergonomus 345 tabletop support for TV/Monitor from 10 to 27 black",
            price: 30,
          },
          {
            id: 4,
            name: "Repair Ergonomus TV stand",
            description:
              "Repair Ergonomus 345 tabletop support for TV/Monitor from 10 to 27 black",
            price: 40,
          },
          {
            id: 5,
            name: "Intallation Wgingenieria TV stand",
            description:
              "Intallation Wgingenieria X 400 wall mount for TV/Monitor from 32 to 55 black",
            price: 15,
          },
          {
            id: 6,
            name: "Repair Wgingenieria TV stand",
            description:
              "Repair Wgingenieria X 400 wall mount for TV/Monitor from 32 to 55 black",
            price: 30,
          },
          {
            id: 7,
            name: "Intallation Home Design TV stand",
            description:
              "Installation Home Design HDL-117B-2 wall mount for TV/Monitor from 14 to 55 black",
            price: 10,
          },
          {
            id: 8,
            name: "Repair Home Design TV stand",
            description:
              "Repair Home Design HDL-117B-2 wall mount for TV/Monitor from 14 to 55 black",
            price: 10,
          },
        ])
        .execute();
      return res.status(200).send(allServiceFromDb);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  } else {
    try {
      const services = await Service.find();
      return res.json(services);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
};
