import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
// import { useDrag } from 'react-dnd';
import styled from 'styled-components';

interface WordObject {
  text: string;
}

const StyledWord = styled.div`
  font-size: 1.1rem;
  padding: 4px 10px;
  margin: 3px;
  border: 1px solid black;
  cursor: default;
  font-family: 'Rubik',  sans-serif;
  background: #fff;
`;

const Word: React.FC<WordObject> = ({ text }) => {
  return (
    <Draggable bounds={'#board'}>
      <StyledWord>{text}</StyledWord>
    </Draggable>
  );
};

export default Word;
