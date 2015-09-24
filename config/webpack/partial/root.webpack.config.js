
import path from 'path';

export default function root({ context }) {
  return {
    resolve: {
      root: [
        path.join(context, 'src')
      ]
    }
  };
}
