import * as consts from './consts';
import { v4 } from 'uuid';

export const addTask = ({ task, columnId }) => ({
  type: consts.ADD_TASK,
  payload: {
    columnId,
    task: {
      id: v4(),
      ...task
    }
  }
});

export const toggleCompleteTask = ({ taskId }) => ({
  type: consts.TOGGLE_TASK_COMPLETE,
  payload: { taskId }
});

export const removeTask = ({ taskId }) => ({
  type: consts.REMOVE_TASK,
  payload: { taskId }
});

export const changeTaskTitle = ({ title }) => ({
  type: consts.CHANGE_TASK_TITLE,
  payload: { title }
});

export const changeTaskTerms = ({ terms }) => ({
  type: consts.CHANGE_TASK_TERMS,
  payload: { terms }
});

export const changeTaskPriority = ({ priority }) => ({
  type: consts.CHANGE_TASK_PRIORITY,
  payload: { priority }
});
