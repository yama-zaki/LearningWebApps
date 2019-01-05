import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import CounterApp from './CounterApp';

const store = createStore(reducer);

render(
  /**
   * <Provider>
   *
   * - ReduxのstoreとReact Componentの紐付け
   *   - stateが更新されたらReactを更新
   *   - Reactのcontextにdispatch関数、getState関数を設定
   */
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('root')
);
