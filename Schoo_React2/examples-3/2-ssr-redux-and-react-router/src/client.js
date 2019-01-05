/**
 * ブラウザで動くコード
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import configureStore from './configureStore';

/**
 * サーバ側から渡されたstate
 * 取得したら削除する
 */
const state = window.__INITIAL_STATE__ || {};
delete window.__INITIAL_STATE__;

const store = configureStore(state);

/**
 * syncHistoryWithStore
 * react-router内部で持っている状態をReduxのstoreに同期させる関数
 * browserHistoryはHistory APIを使ってURLの書き換えを行う
 */
const history = syncHistoryWithStore(browserHistory, store);

render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
