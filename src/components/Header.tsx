import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-family: 'Special Elite', serif;
`;

const StyledAppName = styled.h2`
  margin: 2.5rem 0;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledAppName>Byte Poet</StyledAppName>
    </StyledHeader>
  );
};

export default Header;
