
/**
 * Error displayer.
 * @returns {[type]} [description]
 */
export default function error() {
  // TODO: Implement me!
  // For production – static error page.
  // For dev – stack trace.
  return function(err, req, res, next) {
    next();
  };
}
