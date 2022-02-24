import { Entity, PrimaryGeneratedColumn, Column, getRepository } from 'typeorm';

export interface IFeedback {
  id: number;
  name: string;
  text: string;
  grade: number;
  created: Date;
}

@Entity()
export class Feedback {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    text: string;

  @Column()
    grade: number;

  @Column()
    created: Date;
}

export const createFeedback = async (feedback: IFeedback) => {
  const repo = getRepository(Feedback);
  const newFeedback = new Feedback();
  newFeedback.name = feedback.name;
  newFeedback.text = feedback.text;
  newFeedback.grade = feedback.grade;
  newFeedback.created = new Date;

  await repo.save(newFeedback);
};

export const getAllFeedback = async () => {
  const repo = getRepository(Feedback);
  return await repo.find();
};