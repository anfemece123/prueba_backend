"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Employee_1 = require("./entities/Employee");
const Service_1 = require("./entities/Service");
const Order_1 = require("./entities/Order");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "110505",
    database: "prueba-backend",
    entities: [User_1.User, Employee_1.Employee, Service_1.Service, Order_1.Order],
    logging: true,
    synchronize: true,
});
