import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { Question } from './Question'
import { Submission } from './Submission'

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('simple-json')
  input!: { param: string }

  @Column('double')
  marks!: number

  @ManyToOne(() => Question, (question) => question.answers)
  question!: Question

  @ManyToOne(() => Submission, (submission) => submission.answers)
  submission!: Submission

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
