import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import rootReducer from './reducers';

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
