import * as draggedTaskActions from "./draggedTask";
import * as taskActions from "./task";
import * as messageActions from "./message";
import * as columnActions from "./column";
import * as taskModalActions from "./taskModal";
import * as filterActions from "./filter";

export const showAllTasks = () => filterActions.showAll();
export const showCompletedTasks = () => filterActions.showCompleted();
export const showNotCompletedTasks = () => filterActions.showNotCompleted();

export const addMessageCreator = ({ message }) =>
  messageActions.addMessage({ message });

export const removeMessageCreator = ({ messageId }) =>
  messageActions.removeMessage({ messageId });

export const removeAllMessagesCreator = () =>
  messageActions.removeAllMessages();

export const toggleTaskModalCreator = () => taskModalActions.toggleModal();

export const setColumnIdTaskModalCreator = ({ columnId }) =>
  taskModalActions.setColumnId({ columnId });

export const addColumnCreator = ({ title }) =>
  columnActions.addColumn({ title });

export const removeColumnCreator = ({ columnId }) =>
  columnActions.removeColumn({ columnId });

export const changeColumnTitleCreator = ({ columnId, title }) =>
  columnActions.changeColumnTitle({ columnId, title });

export const addTaskCreator = ({ task, columnId }) =>
  taskActions.addTask({ task, columnId });

export const toggleCompleteTaskCreator = ({ taskId }) =>
  taskActions.toggleCompleteTask({ taskId });

export const removeTaskCreator = ({ taskId }) =>
  taskActions.removeTask({ taskId });

export const changeTaskTitle = ({ taskId, title }) =>
  taskActions.changeTaskTitle({ taskId, title });

export const changeTaskPriority = ({ taskId, priority }) =>
  taskActions.changeTaskPriority({ taskId, priority });

export const changeTaskTerms = ({ taskId, terms }) =>
  taskActions.changeTaskTerms({ taskId, terms });

export const setDraggedTaskCreator = ({ task }) =>
  draggedTaskActions.setDraggedTask({ task });

export const removeDraggedTaskCreator = () =>
  draggedTaskActions.removeDraggedTask();
