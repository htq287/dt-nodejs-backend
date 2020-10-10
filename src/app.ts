import express from 'express';

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
    app.listen(4011, () => {
      console.log(
        "App is running at http://localhost:%d in %s mode",
        4011,
        'dev'
      );

      console.log("Press CTRL-C to stop\n");
    });
  }
}

export default App;