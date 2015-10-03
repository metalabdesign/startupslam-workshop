
import { EnvironmentPlugin } from 'webpack';

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
