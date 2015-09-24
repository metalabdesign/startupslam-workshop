
import { DefinePlugin } from 'webpack';
import path from 'path';
import fs from 'fs';
import { execFileSync } from 'child_process';

// If this fails with `fatal: Needed a single revision` it means you have not
// yet committed anything to the repo.
function git(root, ...args) {
  return execFileSync('git', args, {
    cwd: root
  });
}

function pkg(root) {
  return JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
}

export default function buildInfo({ context }) {
  // TODO: Any other useful information?
  const commit = process.env.SOURCE_VERSION ||
    git(context, 'rev-parse', '--verify', 'HEAD').toString('utf8');
  const version = pkg(context).version;

  return {
    plugins: [
      new DefinePlugin({
        BUILD_COMMIT: JSON.stringify(commit),
        BUILD_VERSION: JSON.stringify(version)
      })
    ]
  };
}
