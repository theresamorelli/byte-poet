import React, { Component } from 'react';
import words from '../data/words.json';

class WordTray extends Component {
  render() {
    const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 30);
    return (
      <div>
        <ul>
          {randomWords.map((word) => (
            <li>{word}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WordTray;
