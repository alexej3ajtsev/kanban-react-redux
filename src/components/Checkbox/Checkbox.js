import React, { useState } from 'react';
import styled from 'styled-components';

const UncheckedSvg = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="#FCFCFC" stroke="#A6A6A6" />
      <path
        d="M4 9.44444C4 8.70281 4.93192 8.37274 5.39871 8.94903L8.5 12.7778L14.4575 6.59965C15.0176 6.01878 16 6.41529 16 7.22222V7.22222L8.5 15L4 9.44444V9.44444Z"
        fill="#ddd"
      />
    </svg>
  );
};

const CheckboxWrapper = styled.span`
  > input {
    opacity: 0;
  }
`;

const CheckLabel = styled.label`
  position: relative;
  top: -4px;
  left: -14px;
  user-select: none;
`;

const CheckedSvg = ({ color }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="#F2F2F2" stroke={color} />
      <path
        d="M4 9.44444C4 8.70281 4.93192 8.37274 5.39871 8.94903L8.5 12.7778L14.4575 6.59965C15.0176 6.01878 16 6.41529 16 7.22222V7.22222L8.5 15L4 9.44444V9.44444Z"
        fill={color}
      />
    </svg>
  );
};

const Checkbox = ({
  label = '[DEFAULT LABEL]',
  color = '#18b4ff',
  checked = false,
  onChange = checked => console.log('change:checked', checked)
}) => {
  const [check, setCheck] = useState(checked);
  const checkHandle = e => {
    e.stopPropagation();
    setCheck(!check);
    onChange(!check);
  };
  return (
    <div style={{ position: 'relative' }}>
      {check ? <CheckedSvg color={color} /> : <UncheckedSvg />}
      <CheckLabel onChange={checkHandle}>
        <CheckboxWrapper>
          <input type="checkbox" onChange={checkHandle} defaultChecked={checked} />
          {label}
        </CheckboxWrapper>
      </CheckLabel>
    </div>
  );
};

export default Checkbox;
