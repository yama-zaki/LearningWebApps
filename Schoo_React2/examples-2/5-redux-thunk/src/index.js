import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import TitanicApp from './TatanicApp';

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, enhancer);

render(
  <Provider store={store}>
    <TitanicApp />
  </Provider>,
  document.getElementById('root')
);
