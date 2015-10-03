
let tests = require.context('../test/spec', true, /\.spec\.js$/);
const specs = { };

// https://github.com/webpack/webpack/issues/834
if (module.hot) {
  module.hot.accept(tests.id, () => {
    tests = require.context('../test/spec', true, /\.spec\.js$/);
  });
}

export default function() {
  tests.keys().forEach((entry) => {
    const entries = tests(entry);
    if (specs[entry] !== entries) {
      specs[entry] = entries;
    }
  });
}
