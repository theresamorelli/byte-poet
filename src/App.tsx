import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <div id="app">
      <StyledApp>
        <Header />
        <Board />
        <Footer />
      </StyledApp>
    </div>
  );
};

export default App;
