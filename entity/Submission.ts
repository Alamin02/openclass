import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Answer } from './Answer'
import { User } from './User'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id!: number

  @OneToMany(() => Answer, (answer) => answer.submission)
  answers!: Answer[]

  @ManyToOne(() => User, (user) => user.submissions)
  submittedBy!: User

  @Column('varchar')
  state!: string

  @Column('int')
  score!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
