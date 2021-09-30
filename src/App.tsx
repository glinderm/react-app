import React, { useState } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import SHIPS from './assets/ships.json';
import { Board } from './components/Board';
import { Game } from './components/Game';
import { Square } from './components/Square';
import { Ship } from './interfaces/ship';


function App() : JSX.Element {
  const [carrier1, setcarrier1] = useState<Ship>(SHIPS[0]);


  return (
    <Container className="App">
      <Row>
        <Game></Game>
      </Row>
      <Row>
        <Col>
          <Board></Board>
        </Col>
        <Col>
          <Board></Board>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
