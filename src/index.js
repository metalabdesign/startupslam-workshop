import { createElement } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
// import BuildInfo from './components/build-info';

import reducer from './reducers/index';
import App from './containers/app';

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

export default (
  <Provider store={store}>
    <App/>
  </Provider>
);
