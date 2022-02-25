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

  return await repo.save(newFeedback);
};

export const getAllFeedback = async () => {
  const repo = getRepository(Feedback);
  return await repo.find();
};

export const getFeedbackById = async (id) => {
  const repo = getRepository(Feedback);
  return await repo.findOne(id);
};

export const deleteFeedbackById = async (id) => {
  const repo = getRepository(Feedback);
  return await repo.delete(id);
};

export const updateFeedback = async (newFeedback: IFeedback, id) => {
  const repo = getRepository(Feedback);
  const oldFeedback = await repo.findOne(id);
  repo.merge(oldFeedback, newFeedback);
  return await repo.save(oldFeedback);
};