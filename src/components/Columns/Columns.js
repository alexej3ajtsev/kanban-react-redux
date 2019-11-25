import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

import Column from "../Column";
import AddTaskForm from "../AddTaskForm";
import TaskModal from "../TaskModal";
import AddColumn from "../AddColumn";
import Filter from "../Filter";

const CanbanColumns = ({ columns, className, router }) => {
  return (
    <>
      <Zoom left cascade>
        <h1>Kanban board</h1>
      </Zoom>
      <Filter />
      {columns.length < 1 && (
        <h3>
          You can create your first tasks column via button at the bottom of the
          screen{" "}
        </h3>
      )}
      <div className={className}>
        {columns.length > 0 &&
          columns.map(column => (
            <Zoom left>
              <Column key={column.id} {...column} />
            </Zoom>
          ))}
      </div>

      <TaskModal>
        <AddTaskForm />
      </TaskModal>
      <AddColumn />
    </>
  );
};

const StyledCanbanColumns = styled(CanbanColumns)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 480px));
  grid-gap: 2em;
`;

const mapStateToProps = state => ({
  router: state.router,
  columns: state.columns
});

export default connect(mapStateToProps)(StyledCanbanColumns);
