/**
 * TaskItem.js
 *
 * - タスク一行を表示するComponent
 * - 削除時、完了フラグ切替時にActionを発行
 */
import React, { PropTypes } from 'react';
import dispatcher from './dispatcher';

function TaskItem({ id, message, done }) {
  const onChange = e => {
    // フラグ切り替えActionを発行
    const done = e.target.checked;
    dispatcher.dispatch({ actionType: 'toggle', id, done });
  };
  const onRemove = () => {
    // 削除Actionを発行
    dispatcher.dispatch({ actionType: 'remove', id });
  };
  const messageComponent = done ? <s>{message}</s> : message;

  return (
    <div>
      <input type="checkbox" checked={done} onChange={onChange} />{' '}
      {done ? <s>{message}</s> : message}
      {messageComponent}
      {' '}
      <button onClick={onRemove}>削除</button>
    </div>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TaskItem;
