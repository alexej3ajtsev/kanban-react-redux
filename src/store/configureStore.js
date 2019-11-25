import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import monitorReducer from '../enhancers/monitorReducer';
import { createBrowserHistory } from 'history';
import { createRootReducer } from '~reducers';

export const history = createBrowserHistory();

const enhancers = [monitorReducer];
const middleware = [thunk, routerMiddleware(history)];
const rootReducer = createRootReducer(history);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configureStore(initialState) {
  const store = createStore(connectRouter(history)(rootReducer), initialState, composedEnhancers);
  return store;
}
