import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


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

function render(store) {
  const state = store.getState();

  ReactDOM.render(
    <div>
      <h1>カウンター: {state}</h1>
      <div>
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
      </div>
    </div>,
    document.getElementById('root')
  );
}

const store = createStore(counter);
store.subscribe(() => { render(store); });
render(store);
