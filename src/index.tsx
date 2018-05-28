import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppState, reducer } from './store';

const store: Store<AppState> = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
