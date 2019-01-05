/**
 * TaskList.js
 *
 * - taskの配列からリストを構成する
 */
import React, { PropTypes } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  const lists = tasks.map(task => (
    <li key={`task-${task.id}`}>
      <TaskItem {...task} />
    </li>
  ));
  return <ul>{lists}</ul>
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })),
};

export default TaskList;
