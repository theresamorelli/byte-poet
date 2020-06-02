import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledFooter = styled.div`
  position: relative;
  bottom: -40px;
  margin: 0 auto;
  width: fit-content;
  height: 12px;
  color: #fff;
  padding: 7px;
  font-family: 'Special Elite', sans-serif;
  font-size: 0.7rem;
  transition: background 0.1s;
  -moz-transition: background 0.1s;
  -webkit-transition: background 0.1s;

  :hover {
    background: ${colors.accent};
  }
`;

const StyledText = styled.div`
  height: 30px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink
        href="https://github.com/theresamorelli/byte-poet"
        target="_blank"
      >
        <StyledText>Made with &#10084; by Theresa</StyledText>
      </StyledLink>
    </StyledFooter>
  );
}
