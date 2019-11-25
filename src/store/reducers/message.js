import * as consts from '~actions/consts';

export default (state = {}, action) => {
  switch (action.type) {
    case consts.ADD_MESSAGE:
      return action.payload.message;
    default:
      return state;
  }
};
