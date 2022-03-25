import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm'
import { Question } from './Question';
import { User } from './User';


@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => User, user => user.quizes)
  createdBy!: User

  @ManyToMany(() => Question, question => question.quizes)
  questions!: Question[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
