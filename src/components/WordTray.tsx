import React from 'react';
import styled from 'styled-components';
import Word from './Word';

const StyledWordTray = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  width: 25%;

  @media (max-width: 800px) {
    font-size: 0.7rem;
  }

  @media (max-width: 500px) {
    font-size: 0.5rem;
    width: 20%;
  }
`;

type WordTrayProps = {
  words: string[];
};

const WordTray: React.FC<WordTrayProps> = ({ words }) => {
  return (
    <StyledWordTray>
      {words?.map((word, i) => (
        <Word text={word} key={i} />
      ))}
    </StyledWordTray>
  );
};

export default WordTray;
