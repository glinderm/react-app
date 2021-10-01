import { useState } from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';
import { calculateWinner } from '../utilities/helpers';
import { Restart } from '../utilities/helpers';
import { isBoardFull } from '../utilities/helpers';

export function Board() {
    const [squares, setSquares] = useState(Array(12).fill(null));
    const [ isPlayerTurn, setIsPlayerTurn ] = useState(true);
    const nextPlayer = isPlayerTurn ? "Player" : "Computer";
    const winner = calculateWinner(squares);

    function renderSquare(i) {
        return (
        <Square
            value={squares[i]}
            onClick={() => {
            if (squares[i].value != null || winner != null) {
                return;
            }
            const nextSquares = squares.slice();
            nextSquares[i] = nextPlayer;
            setSquares(nextSquares);

            setIsPlayerTurn(!isPlayerTurn); // toggle turns
            }}
        />
        );
    }

    function renderRestartButton() {
        return (
        <Restart
            onClick={() => {
            setSquares(Array(12).fill(null));
            setIsPlayerTurn(true);
            }}
        />
        );
    }

    function getStatus() {
        if (winner) {
        return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
        return "Draw!";
        } else {
        return "Next player: " + nextPlayer;
        }
    }

    return (
        <div className="container">
        <div className="game">
            <div className="game-board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className="board-row">
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
            </div>
            </div>
            <div className="game-info">{getStatus()}</div>
            <div className="restart-button">{renderRestartButton()}</div>
        </div>
        </div>
    );
}