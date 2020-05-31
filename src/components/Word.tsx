import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
// import { useDrag } from 'react-dnd';
import styled from 'styled-components';

interface WordObject {
  text: string;
}

const StyledWord = styled.div`
  font-size: 1.3rem;
  padding: 4px 10px;
  margin: 3px;
  border: 1px solid black;
  cursor: default;
`;

const Word: React.FC<WordObject> = ({ text }) => {
  return (
    <Draggable>
      <StyledWord>{text}</StyledWord>
    </Draggable>
  );
};

export default Word;
