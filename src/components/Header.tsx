import React from 'react';
import styled from 'styled-components';
import logo from '../data/logo.jpg';

const StyledHeader = styled.header`
  padding: 20px 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Special Elite', serif;

  @media (max-width: 700px) {
    padding: 5px 0 2px 0;
    font-size: 1.7rem;
  }

  @media (max-width: 500px) {
    padding-top: 10px;
    font-size: 1.3rem;
  }
`;

const StyledLogo = styled.img`
  width: 60px;
  position: relative;
  top: -5px;

  @media (max-width: 700px) {
    width: 40px;
  }
`;

const StyledAppName = styled.h3`
  margin: 0 0 0 20px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="flower logo"></StyledLogo>
      <StyledAppName>Byte Poet</StyledAppName>
    </StyledHeader>
  );
};

export default Header;
