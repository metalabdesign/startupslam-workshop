import { createElement } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
// import BuildInfo from './components/build-info';

import reducer from './reducers/index';
import App from './containers/app';
import { socketConnect } from './actions';

const identity = (x) => x;
const isProd = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';
const useDevtools = !isProd && isBrowser;

const persistStateMiddleware = () =>
  persistState(window.location.href.match(/[?&]debugSession=([^&]+)\b/));

// If prod, noop the devtools middleware (identity fn is noop of composition)
const store = compose(
  applyMiddleware(promiseMiddleware),
  useDevtools ? devTools() : identity,
  useDevtools ? persistStateMiddleware() : identity,
)(createStore)(reducer);

store.dispatch(socketConnect());

export default (
  <div style={{height: '100%'}}>
    <Provider store={store}>
      <App/>
    </Provider>
    { !useDevtools ? null :
      <DebugPanel right bottom top>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    }
  </div>
);
