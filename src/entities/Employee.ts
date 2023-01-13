import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Order } from "./Order";
import { Service } from "./Service";

@Entity("employees")
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column({
    default: true,
  })
  active: boolean;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAd: Date;
  @OneToMany(() => Order, (order) => order.employees)
  orders: Order[];
  @OneToMany(() => Service, (service) => service.employees)
  services: Service[];
}
