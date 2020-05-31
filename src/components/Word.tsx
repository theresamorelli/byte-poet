import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

const StyledWord = styled.div`
  font-size: 1.3rem;
  padding: 4px 10px;
  margin: 3px;
  border: 1px solid black;
`;

const Word: React.FC = (props: any) => {
  return <StyledWord>{props.word}</StyledWord>;
}

export default Word;
