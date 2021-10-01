import { useState } from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function renderSquare(i) {
        return <Square
            value={squares[i]}
            onClick={() => {
                const nextSquares = squares.slice();
                nextSquares[i] = 'X';
                setSquares(nextSquares);
            }}
        />;
    }

    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(0)}
                    {renderSquare(0)}
                </div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(0)}
                    {renderSquare(0)}
                </div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(0)}
                    {renderSquare(0)}
                </div>
                </div>
            </div>
        </div>
    );
}