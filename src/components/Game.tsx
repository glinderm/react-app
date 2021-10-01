import { useState } from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';
import { Board } from './Board';
//import { calculateWinner } from '../utilities/helpers';
import { Restart } from '../utilities/helpers';
import { isBoardFull } from '../utilities/helpers';

export function Game(): JSX.Element {
    return <Button>Game</Button>
}

