import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Question } from './Question'
import { Quiz } from './Quiz'
import { Submission } from './Submission'

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  email!: string

  @Column('varchar')
  password!: string

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role!: UserRole

  @OneToMany(() => Question, (question) => question.createdBy)
  questions!: Question[]

  @OneToMany(() => Quiz, (quiz) => quiz.createdBy)
  quizes!: Quiz[]

  @OneToMany(() => Submission, (submission) => submission.submittedBy)
  submissions!: Submission[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
