import * as consts from '~actions/consts';
import tasks from './tasks';

export default (state = {}, action) => {
  switch (action.type) {
    case consts.ADD_COLUMN:
      return {
        ...action.payload.column,
        tasks: []
      };
    case consts.CHANGE_COLUMNS_TITLE:
      return {
        ...state,
        title: action.payload.title
      };
    case consts.ADD_TASK:
    case consts.CHANGE_TASK_TITLE:
    case consts.CHANGE_TASK_TERMS:
    case consts.CHANGE_TASK_PRIORITY:
    case consts.TOGGLE_TASK_COMPLETE:
    case consts.REMOVE_TASK:
      return {
        ...state,
        tasks: tasks(state.tasks, action)
      };
    default:
      return state;
  }
};
