
import morgan from 'morgan';

export default function() {
  const env = process.env.NODE_ENV || 'development';
  if (env !== 'production') {
    return morgan('dev');
  }
	// TODO: Send logs somewhere useful in production.
  return (req, res, next) => next();
}
