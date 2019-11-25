import * as consts from '~actions/consts';

export const aliases = {
  [consts.FILTER_ALL]: 'all',
  [consts.FILTER_COMPLETED]: 'completed',
  [consts.FILTER_NOT_COMPLETED]: 'not-completed'
};

export default (state = aliases[consts.FILTER_ALL], action) => {
  switch (action.type) {
    case consts.FILTER_ALL:
      return aliases[consts.FILTER_ALL];
    case consts.FILTER_COMPLETED:
      return aliases[consts.FILTER_COMPLETED];
    case consts.FILTER_NOT_COMPLETED:
      return aliases[consts.FILTER_NOT_COMPLETED];
    default:
      return state;
  }
};
