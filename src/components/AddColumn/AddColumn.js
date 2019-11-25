import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addColumnCreator } from '~actions';
import CloseBtn from '../CloseBtn';

const AddColumn = ({ onSubmit = f => f, className }) => {
  const [isFormVivible, setIsFormVivible] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const submitHandle = e => {
    e.preventDefault();
    if (title === '') {
      setError('You must specify title of column');
      return;
    }
    onSubmit({ title });
    setTitle('');
    setIsFormVivible(false);
  };

  return (
    <div className={className}>
      {isFormVivible ? (
        <form onSubmit={submitHandle}>
          <b>Column title</b>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <input type="submit" value="Add" />
          <CloseBtn onClose={() => setIsFormVivible(false)} color="#444" size={10} />
          {error && <span className="error-message">{error}</span>}
        </form>
      ) : (
        <button onClick={() => setIsFormVivible(true)}>Add Column</button>
      )}
    </div>
  );
};

const StyledAddColumn = styled(AddColumn)`
  position: fixed;
  padding: 1em;
  border-radius: 10px;
  background-color: #ddd;
  bottom: 2em;
  right: 2em;
`;

const mapDispatchToProps = {
  onSubmit: addColumnCreator
};

export default connect(undefined, mapDispatchToProps)(StyledAddColumn);
