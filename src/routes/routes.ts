import { Router } from 'express';

import authController from './auth/auth.controller';

const api = Router()
  .use(authController);
export default api;