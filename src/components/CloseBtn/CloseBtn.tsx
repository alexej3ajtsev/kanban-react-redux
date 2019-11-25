import React from 'react';
import styled from 'styled-components';

import CloseIcon from '../CloseIcon';

interface IProps {
  size?: number;
  outSize?: number;
  bgColor?: string;
  color?: string;
  className?: string;
  onClose?: () => void;
}

const CloseBtn: React.FC<IProps> = ({
  size = 15,
  color = 'black',
  className,
  onClose = () => {}
}) => {
  return (
    <div className={className} onClick={onClose}>
      <CloseIcon size={size} color={color} />
    </div>
  );
};

const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.outSize ? `${props.outSize}px` : `${props.size}px`)};
  height: ${props => (props.outSize ? `${props.outSize}px` : `${props.size}px`)};
  border-radius: ${props => (props.outSize ? `50%` : `0`)};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
`;
export default StyledCloseBtn;
