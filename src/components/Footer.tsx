import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: relative;
  bottom: -40px;
  margin: 0 auto;
  width: fit-content;
  height: 12px;
  background-color: goldenrod;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  font-family: 'Special Elite', sans-serif;
  font-size: 0.75rem;
`;

const StyledText = styled.div`
  height: 30px;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink
        href="https://github.com/theresamorelli/byte-poet"
        target="_blank"
      >
        <StyledText>MADE WITH &#10084; by Theresa</StyledText>
      </StyledLink>
    </StyledFooter>
  );
}
