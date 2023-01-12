"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllService = void 0;
const Service_1 = require("../entities/Service");
// import {services} from '../../seeds'
const Test = require("../../seeds");
const getAllService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allService = yield Service_1.Service.find();
    if (!allService.length) {
        try {
            const allServiceFromDb = yield Service_1.Service.createQueryBuilder()
                .insert()
                .into(Service_1.Service)
                .values([
                {
                    id: 1,
                    name: " Intallation North Bayou TV stand",
                    description: "Installation North Bayou NB-P4 wall mount for TV/Monitor from 32 to 55 black",
                    price: 10,
                },
                {
                    id: 2,
                    name: "Repair North Bayou TV stand",
                    description: "Repair North Bayou NB-P4 wall mount for TV/Monitor from 32 to 55 black",
                    price: 20,
                },
                {
                    id: 3,
                    name: "Intallation Ergonomus TV stand",
                    description: "Intallation Ergonomus 345 tabletop support for TV/Monitor from 10 to 27 black",
                    price: 30,
                },
                {
                    id: 4,
                    name: "Repair Ergonomus TV stand",
                    description: "Repair Ergonomus 345 tabletop support for TV/Monitor from 10 to 27 black",
                    price: 40,
                },
                {
                    id: 5,
                    name: "Intallation Wgingenieria TV stand",
                    description: "Intallation Wgingenieria X 400 wall mount for TV/Monitor from 32 to 55 black",
                    price: 15,
                },
                {
                    id: 6,
                    name: "Repair Wgingenieria TV stand",
                    description: "Repair Wgingenieria X 400 wall mount for TV/Monitor from 32 to 55 black",
                    price: 30,
                },
                {
                    id: 7,
                    name: "Intallation Home Design TV stand",
                    description: "Installation Home Design HDL-117B-2 wall mount for TV/Monitor from 14 to 55 black",
                    price: 10,
                },
                {
                    id: 8,
                    name: "Repair Home Design TV stand",
                    description: "Repair Home Design HDL-117B-2 wall mount for TV/Monitor from 14 to 55 black",
                    price: 10,
                },
            ])
                .execute();
            // await Service.bulkCreate(Test);
            //   console.log(allServiceFromDb);
            return res.status(200).send(allServiceFromDb);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
        // try {
        //   const allProducts = await Service.find();
        //   res.status(200).send(allProducts);
        // } catch (error) {
        //   if (error instanceof Error) {
        //     return res.status(500).json({ message: error.message });
        //   }
        // }
    }
    else {
        try {
            const services = yield Service_1.Service.find();
            return res.json(services);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
});
exports.getAllService = getAllService;
