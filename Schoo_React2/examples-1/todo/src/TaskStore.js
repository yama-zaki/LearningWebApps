/**
 * TaskStore.js
 *
 * - タスクを保持するStore
 */
import { Store } from 'flux/utils';
import dispatcher from './dispatcher';

class TaskStore extends Store {
  /**
   * コンストラクタ
   * インスタンス化する際にdispatcherを取る
   */
  constructor(dispatcher) {
    super(dispatcher);
    this.idCounter = 0;
    this.tasks = {};
  }

  getState() {
    const tasks = Object.keys(this.tasks).map(key => {
      const id = parseInt(key, 10);
      const { message, done } = this.tasks[id];
      return { id, message, done };
    });
    return { tasks };
  }

  // タスクの追加
  add(message) {
    const id = this.idCounter++;
    this.tasks[id] = { message, done: false };
    // 変更を通知
    this.__emitChange();
  }

  // タスクの削除
  remove(id) {
    if (this.tasks[id]) {
      delete this.tasks[id];
      // 変更を通知
      this.__emitChange();
    }
  }

  // タスクの完了フラグの切り替え
  toggle(id, done) {
    if (this.tasks[id]) {
      this.tasks[id].done = done;
      // 変更を通知
      this.__emitChange();
    }
  }

  /**
   * DispatcherにActionが投げられた時に実行されるメソッド
   */
  __onDispatch(payload) {
    switch (payload.actionType) {
      case 'add':
        this.add(payload.message);
        break;
      case 'toggle':
        this.toggle(payload.id, payload.done);
        break;
      case 'remove':
        this.remove(payload.id);
        break;
      default:
        console.error('invalid action:', payload);
    }
  }
}

/**
 * シングルトンなので、インスタンスを返す
 */
export default new TaskStore(dispatcher);
