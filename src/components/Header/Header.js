import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Link to="/">Home</Link>
      <Link to="/about">About project</Link>
    </header>
  );
};

const StyledHeader = styled(Header)`
  padding-top: 2em;
  margin-bottom: 2em;
  a:first-of-type {
    margin-right: 1em;
  }
  a,
  a:active,
  a:visited {
    display: inline-block;
    color: #18b4ff;
    font-weight: 700;
    font-size: 1em;
  }
`;

export default StyledHeader;
