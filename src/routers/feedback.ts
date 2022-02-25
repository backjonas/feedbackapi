import express, { Request, Response } from 'express';
import { IFeedback, createFeedback, getAllFeedback, getFeedbackById, deleteFeedbackById, updateFeedback } from '../entity/Feedback';

const feedbackRouter = express.Router();

feedbackRouter.get('/', async (req: Request, res: Response) => {
  getAllFeedback()
    .then(feedback => {
      res.send({ feedback });
    })
    .catch(error => {
      console.log(`Error retrieving feedback: ${error}`);
      res.sendStatus(400);
    });
});

feedbackRouter.get('/:id', async (req: Request, res: Response) => {
  getFeedbackById(req.params.id)
    .then(feedback => {
      res.send({ feedback });
    })
    .catch(error => {
      console.log(`Error retrieving feedback with id ${req.params.id}: ${error}`);
      res.sendStatus(400);
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

feedbackRouter.delete('/:id', async (req: Request, res: Response) => {
  deleteFeedbackById(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(error => {
      console.log(`Error deleting feedback with id ${req.params.id}: ${error}`);
      res.sendStatus(400);
    });
});

feedbackRouter.put('/:id', async (req: Request, res: Response) => {
  const newFeedback = req.body as IFeedback;
  updateFeedback(newFeedback, req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(error => {
      console.log(`Error updating feedback with id ${req.params.id}: ${error}`);
      res.sendStatus(400);
    });
});


export default feedbackRouter;