import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

interface WordObject {
  text: string;
}

const StyledWord = styled.div<{ zIndex: number }>`
  color: black;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 1px 7px;
  margin: 3px;
  border: 1px solid #00000036;
  cursor: default;
  font-family: 'Noto Sans JP', sans-serif;
  background: white;
  z-index: ${(props) => props.zIndex};

  @media (max-width: 700px) {
    font-size: 1rem;
    margin: 2px;
  }

  @media (max-width: 700px) {
    margin: 2px;
  }
  
  @media (max-width: 500px) {
    margin: 1px;
    padding: 1px 5px;
  }
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
