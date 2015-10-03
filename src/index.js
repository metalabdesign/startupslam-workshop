import { createElement } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
// import BuildInfo from './components/build-info';

const identity = (x) => x;
const isProd = process.env.NODE_ENV === 'production';
const isBrowser = typeof window !== 'undefined';
const useDevtools = !isProd && isBrowser;

// If we're on the server, don't do anything with the app
let rootComponent = <div>Loading Slerk...</div>;

// Otherwise start Slerk
if (isBrowser) {
  /* eslint import/no-require: 0 */
  const reducer = require('./reducers/index');
  const RootApp = require('./containers/root');
  const { socketConnect, messagesFetch, usersFetch } = require('./actions');

  const persistStateMiddleware = () =>
    persistState(window.location.href.match(/[?&]debugSession=([^&]+)\b/));

  // If prod, noop the devtools middleware (identity fn is noop of composition)
  const store = compose(
    applyMiddleware(promiseMiddleware),
    useDevtools ? devTools() : identity,
    useDevtools ? persistStateMiddleware() : identity,
  )(createStore)(reducer);

  const { token } = store.getState().auth;
  store.dispatch(usersFetch(token));
  store.dispatch(messagesFetch(token));
  store.dispatch(socketConnect(token, ::store.dispatch));

  rootComponent = (
    <div style={{height: '100%'}}>
      <Provider store={store}>
        <RootApp/>
      </Provider>
      { !useDevtools ? null :
        <DebugPanel right bottom top>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      }
    </div>
  );
}

export default rootComponent;
