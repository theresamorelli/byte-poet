import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  padding: 15px;
  color: #FFF;
  font-size: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <h2>Byte Poet</h2>
    </StyledHeader>
  )
}

export default Header;
