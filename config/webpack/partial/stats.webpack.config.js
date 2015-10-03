
import StatsPlugin from 'stats-webpack-plugin';

export default function stats() {
  return {
    plugins: [
      new StatsPlugin('stats.json', {
        hash: true,
        assets: false,
        reasons: false,
        chunks: true,
        source: false
      })
    ]
  };
}
