import { combineReducers } from 'redux';
import { handleAction, handleActions, combineActions } from 'redux-actions';
import { increment, decrement } from './actions';

const counter = handleActions({
  // incrementを処理する
  [increment]: state => state + 1,
  // decrementを処理する
  [decrement]: state => state - 1,
}, 0);

// incrementとdecrementを処理する
const operationCounter = handleAction(combineActions(increment, decrement), {
  next: state => state + 1,
}, 0);

export default combineReducers({
  count: counter,
  operationCount: operationCounter,
});
