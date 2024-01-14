import dotenv from 'dotenv';
import fs from 'fs';

if(fs.existsSync('.env')) {
    dotenv.config({path: '.env'});
} else {
    dotenv.config({path: '.env.example'});
}

export const prod = process.env.NODE_ENV === "production";

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3001,

  /**
   * API configs
   */
  api: {
    prefix: '/v1',
  },
};