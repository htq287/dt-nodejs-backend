import * as express from "express"
declare global {
  namespace Express {
    interface Request {
      auth?: {
        user?: {
          id?: number;
        };
      };
    }
  }
}