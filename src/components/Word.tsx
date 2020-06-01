import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

interface WordObject {
  text: string;
}

const StyledWord = styled.div<{ zIndex: number }>`
  font-size: 1.1rem;
  padding: 4px 10px;
  margin: 3px;
  border: 1px solid #00000036;
  cursor: default;
  font-family: 'Noto Sans JP', sans-serif;
  background: #fff;
  color: #ed135e;
  font-weight: 500;
  z-index: ${(props) => props.zIndex};
`;

const Word: React.FC<WordObject> = ({ text }) => {
  const [zIndex, setZindex] = useState(0);

  const handleStart = () => {
    setZindex(zIndex + 1);
  };

  return (
    <Draggable bounds={'#board'} onStart={handleStart}>
      <StyledWord zIndex={zIndex}>{text}</StyledWord>
    </Draggable>
  );
};

export default Word;
