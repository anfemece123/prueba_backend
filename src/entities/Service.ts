import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Employee } from "./Employee";

@Entity("services")
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAd: Date;
  @ManyToOne(() => Employee, (employee) => employee.services)
  employees: Employee;
}
