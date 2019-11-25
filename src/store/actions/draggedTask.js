import * as consts from './consts';

export const setDraggedTask = ({ task }) => ({
  type: consts.SET_DRAGGED_TASK,
  payload: { task }
});

export const removeDraggedTask = () => ({
  type: consts.REMOVE_DRAGGED_TASK
});
