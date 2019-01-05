// fetch APIのPolyfill
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import promiseMiddleware from 'redux-promise';
import TitanicApp from './TatanicApp';

const enhancer = applyMiddleware(promiseMiddleware);
const store = createStore(reducer, enhancer);

render(
  <Provider store={store}>
    <TitanicApp />
  </Provider>,
  document.getElementById('root')
);
