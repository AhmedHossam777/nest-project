import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  currency: string;

  @Column()
  amount: number;

  @AfterInsert()
  logInsert() {
    console.log(`new payment added with id: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`payment with ${this.id} id has been updated`);
  }

  @AfterRemove()
  logDelete() {
    console.log(`payment with ${this.id} id has been deleted`);
  }
}