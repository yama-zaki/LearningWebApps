import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

export function CounterApp({ count, operationCount, onIncrement, onDecrement }) {
  return (
    <div>
      <h1>カウンター: {count}</h1>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <h2>操作回数: {operationCount}</h2>
    </div>
  );
}
CounterApp.propTypes = {
  count: PropTypes.number.isRequired,
  operationCount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

/**
 * connect関数
 *
 * - stateとdispatch関数の呼び出しをpropsに変換
 * - React Component内でReduxに直接依存しなくて良くなる
 *   - テストが楽
 *   - React Component内がシンプルになる
 *   - React Componentの再利用性が高まる
 */
export default connect(
  state => ({
    count: state.count,
    operationCount: state.operationCount,
  }),
  dispatch => ({
    onIncrement() { dispatch(increment()); },
    onDecrement() { dispatch(decrement()); },
  })
)(CounterApp);
