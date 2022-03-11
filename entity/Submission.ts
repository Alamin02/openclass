import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("simple-array")
  answer!: string[];

  @Column('int')
  submitted_by!: number

  @Column('varchar')
  state!: string

  @Column('int')
  score!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}