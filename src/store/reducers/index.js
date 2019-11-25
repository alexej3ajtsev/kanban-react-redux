import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import columns from './columns';
import taskModal from './taskModal';
import draggedTask from './draggedTask';
import filter from './filter';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    draggedTask,
    taskModal,
    columns,
    filter
  });
