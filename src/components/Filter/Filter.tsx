import React from 'react';
import styled from 'styled-components';
import { showAllTasks, showCompletedTasks, showNotCompletedTasks } from '~actions';
import { connect } from 'react-redux';

interface IProps {
  showAllTasks: () => void;
  showCompletedTasks: () => void;
  showNotCompletedTasks: () => void;
  className: string;
}

const Filter: React.FC<IProps> = ({
  showAllTasks,
  showCompletedTasks,
  showNotCompletedTasks,
  className
}) => {
  return (
    <nav className={className}>
      <strong>Tasks Filter: </strong>
      <span onClick={showAllTasks}>All</span>
      <span onClick={showCompletedTasks}>Completed</span>
      <span onClick={showNotCompletedTasks}>Not completed</span>
    </nav>
  );
};

const StyledFilter = styled(Filter)`
  padding: 1em;
  background-color: #fafafa;
  margin-bottom: 1em;
  span {
    display: inline-block;
    margin-right: 1em;
    font-weight: 700;
    color: #0094ec;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const mapStateToProps = (state: any) => ({
  filter: state.filter
});

const mapDipatchToProps = {
  showAllTasks,
  showCompletedTasks,
  showNotCompletedTasks
};

export default connect(mapStateToProps, mapDipatchToProps)(StyledFilter);
