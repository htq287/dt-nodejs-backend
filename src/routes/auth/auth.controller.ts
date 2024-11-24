import { NextFunction, Request, Response, Router } from 'express';

import auth from './auth';
import { createUser, getUserProfile, login, updateUserProfile } from './auth.service';

const router = Router();

/**
 * Sign Up
 * @auth none
 * @route {POST} /signup
 */
router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const user = await createUser({ ...payload, demo: false });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Sign In
 * @auth none
 * @route {POST} /signin
 */
router.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const user = await login(payload);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Get user-profile
 * @auth required
 * @route {GET} /user/profile
 */
router.get('/user/profile', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserProfile(req.auth?.user?.id);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/**
 * Update user-profile
 * @auth required
 * @route {PUT} /user/profile
 */
router.put('/user/profile', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await updateUserProfile(req.body, req.auth?.user?.id);
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