import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import {Question} from "./Question";

@Entity()
export class TrueFalseQuestion extends Question{

    @Column('varchar')
    statement!: string;

    @Column('varchar')
    correct_answer!: string;

    @Column('varchar')
    explanation!: string;

}