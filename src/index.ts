import App from './app';

// Init application
(async () => {
    const _app = new App();
    await _app.init();
})();