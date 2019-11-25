import React, { useState } from 'react';
import styled from 'styled-components';
import * as actions from '~actions/index';
import { connect } from 'react-redux';
import CloseBtn from '../CloseBtn';

interface IProps {
  addTask: (obj: any) => void;
  columnId: string;
  className: string;
  toggleModal: () => void;
  setColumnId: (obj: any) => void;
}

const AddTaskForm: React.FC<IProps> = ({
  addTask,
  columnId,
  className,
  toggleModal,
  setColumnId
}) => {
  const [title, setTitle] = useState<string>('');
  const [terms, setTerms] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [priority, setPriority] = useState<number>(0);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if (title === '') {
      setError('You must specify title at least');
      return;
    }

    addTask({ task: { terms, priority, title }, columnId });
    clearAndClose();
  };

  const changeInputHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setFunc: Function
  ) => {
    setFunc(e.target.value);
  };

  const clearAndClose = () => {
    setTitle('');
    setPriority(0);
    setTerms('');
    setColumnId({ columnId: null });
    toggleModal();
  };

  return (
    <form onSubmit={submitHandle} className={className}>
      <h3>Add new Task</h3>
      <div className="form-row">
        <div>
          <label htmlFor="taskTitle">
            <b>Title</b>
          </label>
          <input
            id="taskTitle"
            type="text"
            value={title}
            onChange={e => changeInputHandle(e, setTitle)}
          />
        </div>

        <div>
          <label htmlFor="taskPriority">
            <b>Priority</b>
          </label>
          <input
            id="taskPriority"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            value={priority}
            onChange={e => changeInputHandle(e, setPriority)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="tasTerms">
          <b>Terms :</b>
        </label>

        <textarea
          id="tasTerms"
          cols={30}
          rows={4}
          onChange={e => changeInputHandle(e, setTerms)}
          value={terms}
        />
      </div>
      <input type="submit" value="Add Task" />
      <CloseBtn onClose={clearAndClose} />
      {error && <span className="error-message">{error}</span>}
    </form>
  );
};

const StyledAddTaskForm = styled(AddTaskForm)`
  background-color: #fff;
  .form-row {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
  }
  label {
    display: block;
  }
`;

const mapStateToProps = (state: any) => ({
  columnId: state.taskModal.columnId
});

const mapDispatchToProps = {
  addTask: actions.addTaskCreator,
  toggleModal: actions.toggleTaskModalCreator,
  setColumnId: actions.setColumnIdTaskModalCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(StyledAddTaskForm);
