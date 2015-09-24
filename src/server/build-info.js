/* global BUILD_VERSION BUILD_COMMIT */

export default function() {
  return function(req, res, next) {
    res.set('Build-Version', BUILD_VERSION);
    res.set('Build-Commit', BUILD_COMMIT);
    next();
  };
}
