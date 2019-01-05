import { createAction } from 'redux-actions';
import getNewStories from './getNewStories';

export const renderOnClient = createAction('RENDER_ON_CLIENT');
export const fetchData = createAction('FETCH_DATA', getNewStories);
