import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import {Question} from "./Question";

@Entity()
export class MultipleChoiceQuestion extends Question{

    @Column("simple-array")
    option!: string[];

    @Column('varchar')
    correct_answer!: string;

    @Column('varchar')
    explanation!: string;
}