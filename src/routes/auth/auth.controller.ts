import { NextFunction, Request, Response, Router } from 'express';

const router = Router();


/**
 * Get Author Infomation
 * @auth not required
 * @route {GET} /author
 * @returns author Author
 */
router.get('/author', async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  try {
    return res.json({ 'Author': 'Hung Q.' }).status(200);
  } catch(e) {
    console.error(e.message);
    return next(e);
  }
});

export default router;