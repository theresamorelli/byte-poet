import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledFooter = styled.footer`
  padding: 30px 0 20px 0;

  @media (max-width: 700px) {
    font-size: 0.5rem;
    padding: 15px 0 5px 0;
  }

  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

const StyledButton = styled.div`
  width: fit-content;
  height: 12px;
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
  color: white;
  text-decoration: none;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledButton>
        <StyledLink
          href="https://github.com/theresamorelli/byte-poet"
          target="_blank"
        >
          <StyledText>Made with &#10084; by Theresa</StyledText>
        </StyledLink>
      </StyledButton>
    </StyledFooter>
  );
}
