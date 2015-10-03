
// Express.
import express from 'express';

// Middleware.
import compression from 'compression';
import assets from './assets';
import logging from './logging';
import buildInfo from './build-info';

// Create the application.
const app = express();

// Add assorted middleware.
app.use(logging());
app.use(compression());
app.use(buildInfo());
app.use(assets());

/* eslint import/no-require: 0 */
let render = require('./render');

if (module.hot) {
  module.hot.accept('./render', function() {
    render = require('./render');
  });
}

app.all('*', (req, res, next) => {
  render({
    path: req.path,
    ...req.assets
  }).then(({ markup, status /* scripts, styles */ }) => {
    res
      .status(status)
      .set('Content-Type', 'text/html; charset="utf-8"')
      .send(markup);
  }, next);
});

// Fire.
export default app;
