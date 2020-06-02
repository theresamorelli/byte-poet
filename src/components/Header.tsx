import React from 'react';
import styled from 'styled-components';
import logo from '../data/logo.jpg';

const StyledHeader = styled.header`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-family: 'Special Elite', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  @media (max-width: 700px) {
    font-size: 1.3rem;
    min-height: 60px;
  }
`;

const StyledLogo = styled.img`
position: relative;
top: -5px;
  width: 60px;

  @media (max-width: 700px) {
      width: 40px;
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
