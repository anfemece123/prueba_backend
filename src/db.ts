import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Employee } from "./entities/Employee";
import { Service } from "./entities/Service";
import { Order } from "./entities/Order";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "110505",
  database: "prueba-backend",
  entities: [User, Employee, Service, Order],
  logging: true,
  synchronize: true,
});
