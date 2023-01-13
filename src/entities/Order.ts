import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Employee } from "./Employee";

@Entity("orders")
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  service: string;
  @Column()
  total: number;
  @Column()
  token: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAd: Date;
  @ManyToOne(() => User, (user) => user.orders)
  users: User;
  @ManyToOne(() => Employee, (employee) => employee.orders)
  employees: Employee;
}
