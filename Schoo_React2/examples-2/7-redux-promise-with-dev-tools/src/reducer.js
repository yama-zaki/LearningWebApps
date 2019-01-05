import { type } from './actions';

const intialState = { status: 'LOADING' };

export default function reducer(state = intialState, action) {
  if (action.type === type.LOADING) {
    return intialState;
  } else if (action.type === type.LOADED) {
    return { status: 'LOADED', data: action.data };
  } else if (action.type === type.ERROR) {
    return { status: 'ERROR', error: action.error };
  }
  return state;
}
