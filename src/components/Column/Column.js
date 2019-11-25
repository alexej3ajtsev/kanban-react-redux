import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  removeDraggedTaskCreator,
  addTaskCreator,
  toggleTaskModalCreator,
  setColumnIdTaskModalCreator,
  removeColumnCreator
} from '~actions/index';

import CloseBtn from '../CloseBtn';
import TasksList from '../TasksList';
import styled from 'styled-components';

const Column = ({
  id,
  title,
  tasks,
  addTask,
  removeDraggedTask,
  className,
  draggedTask,
  toggleModal,
  setModalColumnId,
  removeColumn
}) => {
  const column = useRef(null);

  const onDragOver = e => {
    e.preventDefault();
    !column.current.classList.contains('over') && column.current.classList.add('over');
  };

  const onDragLeave = e => {
    e.preventDefault();
    column.current.classList.contains('over') && column.current.classList.remove('over');
  };

  const onDrop = e => {
    e.preventDefault();
    onDragLeave(e);
    addTask({ task: draggedTask, columnId: id });
    removeDraggedTask();
  };

  const taskModalHandle = () => {
    setModalColumnId({ columnId: id });
    toggleModal();
  };

  return (
    <div
      ref={column}
      className={className}
      onDrop={e => onDrop(e)}
      onDragLeave={e => onDragLeave(e)}
      onDragOver={e => onDragOver(e, id)}
      onDragEnter={e => onDragOver(e, id)}
    >
      <h3>{title}</h3>
      <TasksList tasks={tasks} columnId={id} />
      <CloseBtn onClose={() => removeColumn({ columnId: id })} />
      <button onClick={taskModalHandle}>Add Task</button>
    </div>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  draggedTask: PropTypes.object.isRequired,
  removeDraggedTask: PropTypes.func.isRequired
};

const StyledColumn = styled(Column)`
  padding: 1em;
  position: relative;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px dashed transparent;
  transition: background-color 0.2s, border-color 0.2s;
  &.over {
    background-color: #a3ffd0;
    border-color: #8adcb2;
  }
`;

const mapStateToProps = state => ({
  draggedTask: state.draggedTask
});

const mapDispatchToProps = {
  removeDraggedTask: removeDraggedTaskCreator,
  addTask: addTaskCreator,
  toggleModal: toggleTaskModalCreator,
  setModalColumnId: setColumnIdTaskModalCreator,
  removeColumn: removeColumnCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(StyledColumn);
