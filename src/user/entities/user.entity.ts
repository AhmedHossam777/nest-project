import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`new user added with id: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`user with ${this.id} id has been updated`);
  }

  @AfterRemove()
  logDelete() {
    console.log(`user with ${this.id} id has been deleted`);
  }
}