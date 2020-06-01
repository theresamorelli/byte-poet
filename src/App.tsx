import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div
      id="app"
    >
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
