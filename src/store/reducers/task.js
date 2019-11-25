import * as consts from '~actions/consts';

export default (state = {}, action) => {
  switch (action.type) {
    case consts.ADD_TASK:
      return {
        ...action.payload.task,
        complete: action.payload.task.complete ? action.payload.task.complete : false
      };
    case consts.CHANGE_TASK_TITLE:
      return {
        ...state,
        title: action.payload.title
      };
    case consts.CHANGE_TASK_TERMS:
      return {
        ...state,
        terms: action.payload.terms
      };
    case consts.CHANGE_TASK_PRIORITY:
      return {
        ...state,
        priority: action.payload.priority
      };
    case consts.TOGGLE_TASK_COMPLETE:
      return {
        ...state,
        complete: !state.complete
      };
    default:
      return state;
  }
};
