import { useState } from 'react';
import { Button, Col, Row, Container} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';
import { Ship } from '../interfaces/ship';
// import { calculateWinner, createBoard } from '../utilities/helpers';
import { Restart, isBoardFull, calculateWinner, placeShipsPlayer, placeShipsCPU } from '../utilities/helpers';
// import { createBoard } from '../utilities/helpers';

export function Board() {
    //const [playerShips, setPlayerShips] = useState(Array(5).fill(null));
    //const [cpuShips, setCpuShips] = useState(Array(5).fill(null));
    const playerShips = addShips(true);
    const cpuShips = addShips(false);
    const [squares, setSquares] = useState(Array(100).fill(null));
    const [playerSquares, setPlayerSquares] = useState(Array(100).fill(null));
    const [ isPlayerTurn, setIsPlayerTurn ] = useState(true);
    const nextPlayer = isPlayerTurn ? "X" : "O";
    const winner = calculateWinner(playerShips, cpuShips);

    function renderSquare(i) {
        return (
        <Square
            value={squares[i]}
            onClick={() => {
            if (squares[i] != null || winner != null) {
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

    function renderPlayerSquare(i) {
        return (
        <Square
            value={playerSquares[i]}
            onClick={() => {
            if (shipPlacementPhase != true || winner != null) {
                return;
            }
            const nextPlayerSquares = playerSquares.slice();
            nextPlayerSquares[i] = nextPlayer;
            setPlayerSquares(nextPlayerSquares);

            setIsPlayerTurn(!isPlayerTurn); // toggle turns
            }}
        />
        );
    }

    function addShips(isPlayer) {
        if (isPlayer) {
            placeShipsPlayer();
        } else {
            placeShipsCPU();
            shipPlacementPhase = false;
        }
    }

    function renderRestartButton() {
        return (
        <Restart
            onClick={() => {
            setSquares(Array(100).fill(null));
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
        <Container>
        <Row className="game">
            <Col className="game-board" id="board1">
                <div className="label-player"><h3>Player</h3></div>
                <div className="board-row">
                    {renderPlayerSquare(0)}
                    {renderPlayerSquare(1)}
                    {renderPlayerSquare(2)}
                    {renderPlayerSquare(3)}
                    {renderPlayerSquare(4)}
                    {renderPlayerSquare(5)}
                    {renderPlayerSquare(6)}
                    {renderPlayerSquare(7)}
                    {renderPlayerSquare(8)}
                    {renderPlayerSquare(9)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(10)}
                    {renderPlayerSquare(11)}
                    {renderPlayerSquare(12)}
                    {renderPlayerSquare(13)}
                    {renderPlayerSquare(14)}
                    {renderPlayerSquare(15)}
                    {renderPlayerSquare(16)}
                    {renderPlayerSquare(17)}
                    {renderPlayerSquare(18)}
                    {renderPlayerSquare(19)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(20)}
                    {renderPlayerSquare(21)}
                    {renderPlayerSquare(22)}
                    {renderPlayerSquare(23)}
                    {renderPlayerSquare(24)}
                    {renderPlayerSquare(25)}
                    {renderPlayerSquare(26)}
                    {renderPlayerSquare(27)}
                    {renderPlayerSquare(28)}
                    {renderPlayerSquare(29)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(30)}
                    {renderPlayerSquare(31)}
                    {renderPlayerSquare(32)}
                    {renderPlayerSquare(33)}
                    {renderPlayerSquare(34)}
                    {renderPlayerSquare(35)}
                    {renderPlayerSquare(36)}
                    {renderPlayerSquare(37)}
                    {renderPlayerSquare(38)}
                    {renderPlayerSquare(39)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(40)}
                    {renderPlayerSquare(41)}
                    {renderPlayerSquare(42)}
                    {renderPlayerSquare(43)}
                    {renderPlayerSquare(44)}
                    {renderPlayerSquare(45)}
                    {renderPlayerSquare(46)}
                    {renderPlayerSquare(47)}
                    {renderPlayerSquare(48)}
                    {renderPlayerSquare(49)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(50)}
                    {renderPlayerSquare(51)}
                    {renderPlayerSquare(52)}
                    {renderPlayerSquare(53)}
                    {renderPlayerSquare(54)}
                    {renderPlayerSquare(55)}
                    {renderPlayerSquare(56)}
                    {renderPlayerSquare(57)}
                    {renderPlayerSquare(58)}
                    {renderPlayerSquare(59)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(60)}
                    {renderPlayerSquare(61)}
                    {renderPlayerSquare(62)}
                    {renderPlayerSquare(63)}
                    {renderPlayerSquare(64)}
                    {renderPlayerSquare(65)}
                    {renderPlayerSquare(66)}
                    {renderPlayerSquare(67)}
                    {renderPlayerSquare(68)}
                    {renderPlayerSquare(69)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(70)}
                    {renderPlayerSquare(71)}
                    {renderPlayerSquare(72)}
                    {renderPlayerSquare(73)}
                    {renderPlayerSquare(74)}
                    {renderPlayerSquare(75)}
                    {renderPlayerSquare(76)}
                    {renderPlayerSquare(77)}
                    {renderPlayerSquare(78)}
                    {renderPlayerSquare(79)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(80)}
                    {renderPlayerSquare(81)}
                    {renderPlayerSquare(82)}
                    {renderPlayerSquare(83)}
                    {renderPlayerSquare(84)}
                    {renderPlayerSquare(85)}
                    {renderPlayerSquare(86)}
                    {renderPlayerSquare(87)}
                    {renderPlayerSquare(88)}
                    {renderPlayerSquare(89)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(90)}
                    {renderPlayerSquare(91)}
                    {renderPlayerSquare(92)}
                    {renderPlayerSquare(93)}
                    {renderPlayerSquare(94)}
                    {renderPlayerSquare(95)}
                    {renderPlayerSquare(96)}
                    {renderPlayerSquare(97)}
                    {renderPlayerSquare(98)}
                    {renderPlayerSquare(99)}
                </div>
            </Col>
            <Col className="game-board" id="board2">
                <div className="label-player"><h3>Computer</h3></div>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                    {renderSquare(9)}
                </div>
                <div className="board-row">
                    {renderSquare(10)}
                    {renderSquare(11)}
                    {renderSquare(12)}
                    {renderSquare(13)}
                    {renderSquare(14)}
                    {renderSquare(15)}
                    {renderSquare(16)}
                    {renderSquare(17)}
                    {renderSquare(18)}
                    {renderSquare(19)}
                </div>
                <div className="board-row">
                    {renderSquare(20)}
                    {renderSquare(21)}
                    {renderSquare(22)}
                    {renderSquare(23)}
                    {renderSquare(24)}
                    {renderSquare(25)}
                    {renderSquare(26)}
                    {renderSquare(27)}
                    {renderSquare(28)}
                    {renderSquare(29)}
                </div>
                <div className="board-row">
                    {renderSquare(30)}
                    {renderSquare(31)}
                    {renderSquare(32)}
                    {renderSquare(33)}
                    {renderSquare(34)}
                    {renderSquare(35)}
                    {renderSquare(36)}
                    {renderSquare(37)}
                    {renderSquare(38)}
                    {renderSquare(39)}
                </div>
                <div className="board-row">
                    {renderSquare(40)}
                    {renderSquare(41)}
                    {renderSquare(42)}
                    {renderSquare(43)}
                    {renderSquare(44)}
                    {renderSquare(45)}
                    {renderSquare(46)}
                    {renderSquare(47)}
                    {renderSquare(48)}
                    {renderSquare(49)}
                </div>
                <div className="board-row">
                    {renderSquare(50)}
                    {renderSquare(51)}
                    {renderSquare(52)}
                    {renderSquare(53)}
                    {renderSquare(54)}
                    {renderSquare(55)}
                    {renderSquare(56)}
                    {renderSquare(57)}
                    {renderSquare(58)}
                    {renderSquare(59)}
                </div>
                <div className="board-row">
                    {renderSquare(60)}
                    {renderSquare(61)}
                    {renderSquare(62)}
                    {renderSquare(63)}
                    {renderSquare(64)}
                    {renderSquare(65)}
                    {renderSquare(66)}
                    {renderSquare(67)}
                    {renderSquare(68)}
                    {renderSquare(69)}
                </div>
                <div className="board-row">
                    {renderSquare(70)}
                    {renderSquare(71)}
                    {renderSquare(72)}
                    {renderSquare(73)}
                    {renderSquare(74)}
                    {renderSquare(75)}
                    {renderSquare(76)}
                    {renderSquare(77)}
                    {renderSquare(78)}
                    {renderSquare(79)}
                </div>
                <div className="board-row">
                    {renderSquare(80)}
                    {renderSquare(81)}
                    {renderSquare(82)}
                    {renderSquare(83)}
                    {renderSquare(84)}
                    {renderSquare(85)}
                    {renderSquare(86)}
                    {renderSquare(87)}
                    {renderSquare(88)}
                    {renderSquare(89)}
                </div>
                <div className="board-row">
                    {renderSquare(90)}
                    {renderSquare(91)}
                    {renderSquare(92)}
                    {renderSquare(93)}
                    {renderSquare(94)}
                    {renderSquare(95)}
                    {renderSquare(96)}
                    {renderSquare(97)}
                    {renderSquare(98)}
                    {renderSquare(99)}
                </div>
            </Col>
            <div className="game-info">{getStatus()}</div>
            <div className="restart-button">{renderRestartButton()}</div>
        </Row>
        </Container>
    );
}