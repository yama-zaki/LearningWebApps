// fetch APIのPolyfill
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import promiseMiddleware from 'redux-promise';
import TitanicApp from './TatanicApp';

// 本番環境でない＆拡張がインストール済みかどうか
const useDevTools =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// 他のenhancerと結合する関数
const composeEnhancers = useDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middlewareEnhancer = applyMiddleware(promiseMiddleware);
// compose関数：複数の関数を結合する
const store = createStore(
  reducer,
  composeEnhancers(middlewareEnhancer)
);

render(
  <Provider store={store}>
    <TitanicApp />
  </Provider>,
  document.getElementById('root')
);
