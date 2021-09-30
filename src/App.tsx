import React from 'react';
import './App.css';
import SHIPS from './assets/ships.json';
import { Board } from './components/Board';
import { Game } from './components/Game';

function App() : JSX.Element {
  return (
    <div className="App">
      <Game></Game>
      <Board></Board>
    </div>
  );
}

export default App;
