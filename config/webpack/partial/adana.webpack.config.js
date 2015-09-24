
export default function adana() {
  const env = process.env.NODE_ENV || 'development';

  if (process.env.COVERAGE || env !== 'test') {
    return { };
  }

  // Rewrite all the entry points to include HMR code.
  return {
    module: {
      loaders: [{
        name: 'babel',
        query: {
          plugins: [
            'adana'
          ],
          extra: {
            adana: true
          }
        }
      }]
    }
  };
}
