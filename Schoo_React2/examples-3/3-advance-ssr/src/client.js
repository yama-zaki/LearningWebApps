/**
 * ブラウザで動くコード
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configureStore';
import * as actions from './actions';

/**
 * サーバ側から渡されたstate
 * 取得したら削除する
 */
const state = window.__INITIAL_STATE__ || {};
delete window.__INITIAL_STATE__;

const store = configureStore(state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  /**
   * 第1引数のReact Componentのrenderが終わったタイミングで実行される
   */
  () => {
    /**
     * 残りを描画するactionを流す
     */
    store.dispatch(actions.renderOnClient());
  }
);
