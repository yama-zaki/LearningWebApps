import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';
import * as actions from './actions';

const readyToRender = handleAction(actions.renderOnClient, {
  next() { return true; },
}, false);
const stories = handleAction(actions.fetchData, {
  next(state, action) { return action.payload; },
  throw(state) { return state; },
}, []);

export default combineReducers({ readyToRender, stories })
