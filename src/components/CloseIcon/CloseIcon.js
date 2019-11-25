import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ color = 'black', size = 15 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 1.91L13.09 0.5L7.5 6.09L1.91 0.5L0.5 1.91L6.09 7.5L0.5 13.09L1.91 14.5L7.5 8.91L13.09 14.5L14.5 13.09L8.91 7.5L14.5 1.91Z"
        fill={color}
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default CloseIcon;
