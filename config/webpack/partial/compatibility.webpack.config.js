
export default function compatibility({ target }) {
  // These shims should only be available to web targets.
  if (target === 'web') {
    return {
      entry: {
        shiv: 'html5shiv/src/html5shiv-printshiv',
        shim: [ 'es5-shim/es5-shim', 'es5-shim/es5-sham' ]
      }
    };
  }
}
