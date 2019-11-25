import * as consts from "./consts";

export const showAll = () => ({
  type: consts.FILTER_ALL
});

export const showCompleted = () => ({
  type: consts.FILTER_COMPLETED
});

export const showNotCompleted = () => ({
  type: consts.FILTER_NOT_COMPLETED
});
