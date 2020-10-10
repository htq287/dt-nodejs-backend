import express from 'express';
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