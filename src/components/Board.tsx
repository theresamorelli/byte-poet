import React from 'react';
import styled from 'styled-components';
import WordTray from './WordTray';

const StyledBoard = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 80vw;
  height: calc(85vh - 60px);
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 36px -2px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-end;
`;

export default function Board() {
  return (
    <StyledBoard className='board'>
      <WordTray />
    </StyledBoard>
  );
}
