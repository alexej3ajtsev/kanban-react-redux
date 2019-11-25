import * as consts from '~actions/consts';
import message from './message';

export default (state = [], action) => {
  switch (action.type) {
    case consts.ADD_MESSAGE:
      return [...state, message({}, action)];
    case consts.REMOVE_MESSAGE:
      return [...state.filter(m => m.id !== action.payload.messageId)];
    case consts.REMOVE_ALL_MESSAGES:
      return [];
    default:
      return state;
  }
};
