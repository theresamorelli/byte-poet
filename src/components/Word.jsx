import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWord = styled.div`
  font-size: 1.3rem;
  padding: 4px 10px;
  margin: 3px;
  border: 1px solid black;
`;

export default class Word extends Component {
  render() {
    return <StyledWord>{this.props.word}</StyledWord>;
  }
}
