import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

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

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}

