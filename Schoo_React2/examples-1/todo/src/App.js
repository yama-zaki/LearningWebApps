/**
 * App.js
 *
 * - 最もトップにあるComponent
 * - Containerを使ってTaskStoreと紐付けする
 *   - TaskStoreが更新されたらAppのstateを更新
 */
import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TaskStore from './TaskStore';
import Form from './Form';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

// このComponentがStoreを返す
App.getStores = () => [TaskStore];
// this.stateに入る値を返す
App.calculateState = () => TaskStore.getState();

export default Container.create(App);
