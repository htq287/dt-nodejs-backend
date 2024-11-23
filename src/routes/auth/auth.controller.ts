import { NextFunction, Request, Response, Router } from 'express';

import auth from './auth';
import { createUser, getCurrentUser, login, updateUser } from './auth.service';

const router = Router();

/**
 * Create an user
 * @auth none
 * @route {POST} /users
 * @bodyparam user User
 * @returns user User
 */
router.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await createUser({ ...req.body.user, demo: false });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Login
 * @auth none
 * @route {POST} /users/login
 * @bodyparam user User
 * @returns user User
 */
router.post('/users/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await login(req.body.user);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Get current user
 * @auth required
 * @route {GET} /user
 * @returns user User
 */
router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getCurrentUser(req.auth?.user?.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Update user
 * @auth required
 * @route {PUT} /user
 * @bodyparam user User
 * @returns user User
 */
router.put('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const user = await updateUser(req.body.user, req.auth?.user?.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});


/**
 * Get Author Infomation
 * @auth not required
 * @route {GET} /author
 * @returns author Author
 */
router.get('/author', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ 'Author': 'Hung Q.' }).status(200);
  } catch(e) {
    console.error(e.message);
    return next(e);
  }
});

export default router;