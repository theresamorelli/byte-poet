import React from 'react';
import styled from 'styled-components';
import Word from './Word';
import words from '../data/words.json';

const StyledWordTray = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  width: 25%;
`;

const WordTray: React.FC = () => {
  const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 40);
  return (
    <StyledWordTray>
      {randomWords.map((word, i) => (
        <Word text={word} key={i} />
      ))}
    </StyledWordTray>
  );
};

export default WordTray;
