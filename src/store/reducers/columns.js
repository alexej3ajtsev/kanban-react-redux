import * as consts from '~actions/consts';
import column from './column';

export default (state = [], action) => {
  switch (action.type) {
    case consts.ADD_COLUMN:
      return [...state, column({}, action)];
    case consts.REMOVE_COLUMN:
      return [...state.filter(c => c.id !== action.payload.columnId)];
    case consts.CHANGE_COLUMNS_TITLE:
      return [...state.map(c => (c.id !== action.payload.columnId ? c : column(c, action)))];
    case consts.ADD_TASK:
      return [...state.map(c => (c.id === action.payload.columnId ? column(c, action) : c))];
    case consts.CHANGE_TASK_TITLE:
    case consts.CHANGE_TASK_TERMS:
    case consts.CHANGE_TASK_PRIORITY:
    case consts.TOGGLE_TASK_COMPLETE:
    case consts.REMOVE_TASK:
      return [...state.map(c => column(c, action))];
    default:
      return state;
  }
};
