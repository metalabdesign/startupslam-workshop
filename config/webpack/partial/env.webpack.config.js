
import { EnvironmentPlugin } from 'webpack';
import dotenv from 'dotenv';

// Load values from .env files; also don't complain about any errors from not
// being able to load the .env file since there are cases where that file most
// likely should not exist.
dotenv.load({ silent: true });

export default function env() {
  // Use bluebird long traces for development and testing
  // See: https://github.com/petkaantonov/bluebird#error-handling
  process.env.BLUEBIRD_DEBUG = env.NODE_ENV !== 'production';

  return {
    plugins: [
      // Export `process.env` to the app being built. Optimize your code by
      // checking `NODE_ENV` and set things like config variables (e.g.
      // `API_URL`).
      new EnvironmentPlugin(Object.keys(process.env))
    ]
  };
}
