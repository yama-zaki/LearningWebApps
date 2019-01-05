import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';


/**
 * Action Creator
 */
function increment() {
  return { type: 'INCREMENT' };
}

function decrement() {
  return { type: 'DECREMENT' };
}

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
      return state;
  }
}

// 操作回数を記録
function operationCounter(state = 0, action) {
  return (action.type === 'INCREMENT' || action.type === 'DECREMENT')
    ? state + 1
    : state;
}

/**
 * combineReducers
 *
 * - 複数のReducerをまとめて一つのReducerを返す
 */
const reducer = combineReducers({
  count: counter,
  operationCount: operationCounter,
});

function render(store) {
  const state = store.getState();

  ReactDOM.render(
    <div>
      <h1>カウンター: {state.count}</h1>
      <div>
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
      </div>
      <h2>操作回数: {state.operationCount}</h2>
    </div>,
    document.getElementById('root')
  );
}

const store = createStore(reducer);
store.subscribe(() => { render(store); });
render(store);
