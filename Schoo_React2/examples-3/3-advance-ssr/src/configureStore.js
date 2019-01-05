import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';

/**
 * storeの初期化
 */
export default function configureStore(initialState = {}) {
  // Redux dev tools
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(promiseMiddleware)
  ));
}
