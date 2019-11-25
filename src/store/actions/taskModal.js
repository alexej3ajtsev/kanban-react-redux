import * as consts from './consts';

export const toggleModal = () => ({
  type: consts.TOGGLE_MODAL_TASK_FORM
});

export const setColumnId = ({ columnId }) => ({
  type: consts.SET_ACTIVE_COLUMN_MODAL_VALUE,
  payload: { columnId }
});
