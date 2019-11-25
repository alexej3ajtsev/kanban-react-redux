import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '~actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import CloseBtn from '../CloseBtn';
import Checkbox from '../Checkbox';
import { getFilteredData } from '../../utils/filter';

const TasksList = ({ tasks, filter, removeTask, setDraggedTask, toggleComplete, className }) => {
  const onDrag = (e, task) => {
    e.preventDefault();
    setDraggedTask({ task });
    removeTask({ taskId: task.id });
  };
  const filteredData = getFilteredData(tasks, filter);
  return (
    <Zoom bottom cascade>
      <ul className={className}>
        {filteredData.map(task => {
          return (
            <li key={task.id} draggable onDrag={e => onDrag(e, task)}>
              <h3>{task.title}</h3>
              <div className="priority">Priority: {task.priority}</div>
              {task.terms.length > 0 && <p>{task.terms}</p>}
              <CloseBtn
                size={10}
                color={'#880100'}
                onClose={() => removeTask({ taskId: task.id })}
              />
              <Checkbox
                checked={task.complete}
                label="Complete"
                onChange={() => toggleComplete({ taskId: task.id })}
              />
            </li>
          );
        })}
      </ul>
    </Zoom>
  );
};

const StyledTasksList = styled(TasksList)`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    position: relative;
    padding: 1em;
    margin: 0.5em 0;
    border: 1px dashed #ddd;
    border-radius: 5px;
    background-color: #fff;
    &:hover {
      background-color: #bdffd7;
    }
    .priority {
      position: absolute;
      top: 1em;
      left: 1em;
      font-size: 0.875em;
    }
  }
`;

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeTask: PropTypes.func.isRequired,
  setDraggedTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = {
  removeTask: actions.removeTaskCreator,
  setDraggedTask: actions.setDraggedTaskCreator,
  toggleComplete: actions.toggleCompleteTaskCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(StyledTasksList);
