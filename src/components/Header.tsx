import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  padding: 15px;
  color: #FFF;
  font-size: 2rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h2>Byte Poet</h2>
    </StyledHeader>
  )
}
