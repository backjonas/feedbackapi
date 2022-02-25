import express from 'express';
import feedbackRouter from './routers/feedback';

const app = express();
app.use(express.json());
app.use('/api/feedback', feedbackRouter);
app.use((request, response) => {
  response.sendStatus(404);
});

export default app;