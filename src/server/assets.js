
import { Router } from 'express';
import serveStatic from 'serve-static';
import { readFileSync } from 'fs';
import path from 'path';
import collect from './collect';

const env = process.env.NODE_ENV || 'development';
const router = new Router();

let assets = { };

function middleware(req, res, next) {
  req.assets = assets;
  next();
}

router.use(middleware);

// Enable dynamic updating of assets in development environment.
if (env === 'development') {
  process.on('assets', ([url, stats]) => {
    assets = collect(url, stats);
  });
} else {
  const assetPath = path.join(process.cwd(), 'build', 'client');
  const assetUrl = process.env.ASSET_URL || '/assets';

  assets = collect(assetUrl, JSON.parse(readFileSync(path.join(
    assetPath, 'stats.json'
  ), 'utf8')));

  // If assets are being served locally then include them.
  if (assetUrl.charAt(0) === '/') {
    // TODO: Don't include source-maps, etc.
    router.use(assetUrl, serveStatic(assetPath, {
      index: false,
      lastModified: true,
      maxAge: '100 years',
      redirect: false,
      fallthrough: false
    }));
  }
}

export default function() {
  return router;
}
