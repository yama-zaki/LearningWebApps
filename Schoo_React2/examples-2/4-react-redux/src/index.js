import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

/**
 * Reducer
 */
function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      // 変更なしの場合は前のstateをそのまま返す
      return state;
  }
}

// 操作回数を記録
function operationCounter(state = 0, action) {
  return (action.type === 'INCREMENT' || action.type === 'DECREMENT')
    ? state + 1
    : state;
}

const reducer = combineReducers({
  count: counter,
  operationCount: operationCounter,
});
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
