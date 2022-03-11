import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import {Question} from "./Question";

@Entity()
export class DescriptiveQuestion extends Question{

    @Column('varchar')
    remarks!: string;
}