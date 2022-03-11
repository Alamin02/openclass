import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'


@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("simple-array")
  question!: string[];

  @Column('int')
  author_id!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
