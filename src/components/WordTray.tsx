import React, { Component } from 'react';
import styled from 'styled-components';
import Word from './Word';
import words from '../data/words.json';

const StyledWordTray = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  width: 25%;
  margin-right: 10px;
`;

class WordTray extends Component {
  render() {
    const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 45);
    return (
      <StyledWordTray>
        {randomWords.map((word) => (
          <Word word={word} />
        ))}
      </StyledWordTray>
    );
  }
}

export default WordTray;
