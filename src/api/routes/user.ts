import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  app.get('/author', async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json({ 'Author': 'Hung Q.' }).status(200);
    } catch(e) {
      console.error(e.message);
      return next(e);
    }
  });
};