import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes/routes';
import config from './config';

class App {
  async init(): Promise<any> {
    const app = express();

    /**
     * Health Check endpoints
     */
    app.get('/status', (req, res) => {
      res.status(200).end();
    });

    app.use(cors());
     
    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());

    // Load API routes
    app.use(config.api.prefix, routes);

    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
      const err = new Error('Not Found');
      err['status'] = 404;
      next(err);
    });

    /// error handlers
    app.use((err, req, res, next) => {
      if (err.name === 'Unauthorized Error') {
        return res
          .status(err.status)
          .send({ message: err.message })
          .end();
      }

      return next(err);
    });
    
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    });

    /**
     * Start Express server
     */
    app.listen(config.port, () => {
      console.log(
        "App is running at http://localhost:%d in %s mode",
        config.port,
        config.env
      );

      console.log("Press CTRL-C to stop\n");
    });
  }
}

export default App;