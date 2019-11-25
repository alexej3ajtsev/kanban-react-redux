import * as consts from './consts';
import { v4 } from 'uuid';

export const addColumn = ({ title }) => ({
  type: consts.ADD_COLUMN,
  payload: {
    column: {
      id: v4(),
      title
    }
  }
});

export const removeColumn = ({ columnId }) => ({
  type: consts.REMOVE_COLUMN,
  payload: { columnId }
});

export const changeColumnTitle = ({ columnId, title }) => ({
  type: consts.CHANGE_COLUMNS_TITLE,
  payload: { columnId, title }
});
