import * as consts from '~actions/consts';
import task from './task';

export default (state = [], action) => {
  switch (action.type) {
    case consts.ADD_TASK:
      return [...state, task({}, action)];
    case consts.REMOVE_TASK:
      return [...state.filter(t => t.id !== action.payload.taskId)];
    case consts.CHANGE_TASK_TITLE:
    case consts.CHANGE_TASK_TERMS:
    case consts.CHANGE_TASK_PRIORITY:
    case consts.TOGGLE_TASK_COMPLETE:
      return [...state.map(t => (t.id !== action.payload.taskId ? t : task(t, action)))];
    default:
      return state;
  }
};
