import React from 'react';
import styled from 'styled-components';
import WordTray from './WordTray';

const StyledBoard = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 7px;
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  height: 70vh;
  overflow: hidden;
  position: relative; // indicates droppable area for Draggable library

  -webkit-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);

  @media (max-width: 600px) {
    max-width: 95%;
    border-radius: 5px;
  }
`;

const Board: React.FC = () => {
  return (
    <StyledBoard id="board">
      <WordTray />
    </StyledBoard>
  );
};

export default Board;
