import React from 'react';
import './App.css';
import SHIPS from './assets/ships.json';

function App() : JSX.Element {
  return (
    <div className="App">
      {JSON.stringify(SHIPS)}
    </div>
  );
}

export default App;
