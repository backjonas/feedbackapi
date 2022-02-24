import express from 'express';
import { Request, Response } from 'express';
import { IFeedback, createFeedback, getAllFeedback } from '../entity/Feedback';

const feedbackRouter = express.Router();

feedbackRouter.get('/', async (req: Request, res: Response) => {
  getAllFeedback()
    .then(feedback => {
      res.send({ feedback });
    })
    .catch(error => {
      console.log(`Error retrieving feedback: ${error}`);
    });
});

feedbackRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newFeedback = req.body as IFeedback;
    await createFeedback(newFeedback);
    res.sendStatus(201);
  } catch (error) {
    console.log(`Error creating feedback: ${error}`);
    res.sendStatus(400);
  }
});

export default feedbackRouter;