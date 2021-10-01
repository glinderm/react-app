import React, { useState } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import SHIPS from './assets/ships.json';
import { Board } from './components/Board';
import { Square } from './components/Square';
//import { Ship } from './interfaces/ship';


function App() : JSX.Element {


  return (
    <Container className="App">
      <Row>
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
