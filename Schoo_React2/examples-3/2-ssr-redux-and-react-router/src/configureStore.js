import { createStore } from 'redux';
import reducer from './reducer';

/**
 * storeの初期化
 */
export default function configureStore(initialState = {}) {
  return createStore(reducer, initialState);
}
