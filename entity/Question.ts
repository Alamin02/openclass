import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm'
import { Answer } from './Answer'
import { Quiz } from './Quiz'
import { User } from './User'

enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  DESCRIPTIVE = 'descriptive',
}

@Entity()
export abstract class Question {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  title!: string

  @Column('varchar')
  description!: string

  @Column('int')
  mark!: number

  @Column('int')
  index!: number

  @ManyToOne(() => User, (user) => user.questions)
  createdBy!: User

  @ManyToMany(() => Quiz, quiz => quiz.questions)
  quizes!: Quiz[]

  @OneToMany(() => Answer, answer => answer.question)
  answers!: Answer[]

  @Column({
    type: 'enum',
    enum: QuestionType,
    default: QuestionType.MULTIPLE_CHOICE,
  })
  type!: QuestionType

  @Column('simple-json')
  body!: {
    foo: string
  }

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date
}
