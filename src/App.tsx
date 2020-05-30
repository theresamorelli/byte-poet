import React from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
};

export default App;
