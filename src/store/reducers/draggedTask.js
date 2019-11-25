import * as consts from '~actions/consts';

export default (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case consts.SET_DRAGGED_TASK: {
      return payload.task;
    }
    case consts.REMOVE_DRAGGED_TASK: {
      return {};
    }
    default:
      return state;
  }
};
