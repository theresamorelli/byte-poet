import React from 'react';
import styled from 'styled-components';
import { withSize } from 'react-sizeme';

import WordTray from './WordTray';
import wordData from '../data/words.json';
import { getNumWords } from '../utils/utils';

const StyledBoard = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 7px;
  display: flex;
  justify-content: flex-end;
  min-width: 275px;
  max-width: 1000px;
  height: 75vh;
  overflow: hidden;
  position: relative; // indicates droppable area for Draggable library

  -webkit-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);

  @media (max-width: 700px) {
    max-width: 95%;
    border-radius: 5px;
    padding: 5px;
  }
`;

type SizeProps = {
  size: {
    width: number;
    height: number;
    position: number;
  };
};

const wordsRandomOrder = wordData.sort(() => 0.5 - Math.random());

const Board: React.FC<SizeProps> = ({ size }) => {
  const { width, height } = size;
  const numWords = getNumWords(width, height);
  const words = wordsRandomOrder.slice(0, numWords);

  return (
    <StyledBoard id="board">
      <WordTray words={words} />
    </StyledBoard>
  );
};

export default withSize({ monitorHeight: true })(Board);
