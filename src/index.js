import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import * as localState from './localStorage';
import './global.css';
import throttle from 'lodash/throttle';

const initialState = localState.loadState();

const store = configureStore(initialState);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    localState.saveState(state);
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
