import * as consts from '~actions/consts';

export default (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case consts.TOGGLE_MODAL_TASK_FORM: {
      return {
        ...state,
        isVisible: !state.isVisible
      };
    }
    case consts.SET_ACTIVE_COLUMN_MODAL_VALUE: {
      return {
        ...state,
        columnId: payload.columnId
      };
    }
    default:
      return state;
  }
};
