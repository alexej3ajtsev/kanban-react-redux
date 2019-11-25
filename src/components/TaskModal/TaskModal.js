import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TaskModal = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

TaskModal.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

const StyledTaskModal = styled(TaskModal)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.84);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
  .modal-content {
    transform: ${props =>
      props.isVisible ? "translateY(0)" : "translateY(100px)"};
    position: relative;
    min-width: 20em;
    min-height: 20em;
    border-radius: 3px;
    background-color: #fff;
    padding: 1em;
    transition: transform 0.2s ease-out;
  }
`;

const mapStateToProps = state => ({
  isVisible: state.taskModal.isVisible,
  initialValue: state.taskModal.initialValue
});

export default connect(mapStateToProps)(StyledTaskModal);
