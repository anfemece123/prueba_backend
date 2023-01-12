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

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({
    default: true,
  })
  active: boolean;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAd: Date;
  @OneToMany(() => Order, (order) => order.users)
  orders: Order[];
}
