import { useState } from 'react';
import { Button, Col, Row, Container} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';
import { Ship } from '../interfaces/ship';
// import { calculateWinner, createBoard } from '../utilities/helpers';
import { Restart, isBoardFull, calculateWinner, placeShipsPlayer, placeShipsCPU, cpuGuess } from '../utilities/helpers';

export function Board() {
    const [squares, setSquares] = useState(Array(100).fill(null));
    const [playerSquares, setPlayerSquares] = useState(Array(100).fill(null));
    const [ isPlayerTurn, setIsPlayerTurn ] = useState(true);
    const nextPlayer = isPlayerTurn ? "Player" : "Computer";
    let winner = null;
    

    function renderSquare(i) {
        return (
        <Square
            value={squares[i]}
            onClick={() => {
            if (winner != null || squares[i] != null) {
                return;
            } 
            const nextSquares = squares.slice();
            nextSquares[i] = "*";
            setSquares(nextSquares);

            setIsPlayerTurn(!isPlayerTurn); // toggle turns
            aiTurn();
            }}
        />
        );
    }
    function renderPlayerSquare(i) {
        return (
        <Square
            value={playerSquares[i]}
            onClick={() => {
            if (winner != null) {
                return;
            }
            }}
        />
        );
    }

    function aiTurn() {
        const guess = cpuGuess();

        const nextPlayerSquares = playerSquares.slice();
        if (playerSquares[guess] == null) {
            nextPlayerSquares[guess] = "*";
        };
        setPlayerSquares(nextPlayerSquares);
        return (
            <Square
                value={playerSquares[guess]}
                onClick={() => {
                    return;
                }}
            />
        );
    }


    function renderRestartButton() {
        return (
        <Restart
            onClick={() => {
            setSquares(Array(100).fill(null));
            setPlayerSquares(Array(100).fill(null));
            setIsPlayerTurn(true);
            }}
        />
        );
    }

    function getStatus() {
        if (winner) {
        return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
        return "All done Shake to play again!";
        }
    }

    return (
        <Container>
        <Row className="game"><h2>Draw-off! Who's the better sketcher?</h2>
            <Col className="game-board" id="board1">
                <div className="label-player"><h3>Player</h3></div>
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
                    {renderSquare(10)}
                    {renderSquare(11)}
                    {renderSquare(12)}
                    {renderSquare(13)}
                    {renderSquare(14)}
                </div>
                <div className="board-row"> 
                    {renderSquare(15)}
                    {renderSquare(16)}
                    {renderSquare(17)}
                    {renderSquare(18)}
                    {renderSquare(19)}
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
                    {renderSquare(40)}
                    {renderSquare(41)}
                    {renderSquare(42)}
                    {renderSquare(43)}
                    {renderSquare(44)}
                </div>
                <div className="board-row">
                    {renderSquare(45)}
                    {renderSquare(46)}
                    {renderSquare(47)}
                    {renderSquare(48)}
                    {renderSquare(49)}
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
                    {renderSquare(70)}
                    {renderSquare(71)}
                    {renderSquare(72)}
                    {renderSquare(73)}
                    {renderSquare(74)}
                </div>
                <div className="board-row">
                    {renderSquare(75)}
                    {renderSquare(76)}
                    {renderSquare(77)}
                    {renderSquare(78)}
                    {renderSquare(79)}
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
                    {renderSquare(100)}
                    {renderSquare(101)}
                    {renderSquare(102)}
                    {renderSquare(103)}
                    {renderSquare(104)}
                </div>
                <div className="board-row">
                    {renderSquare(105)}
                    {renderSquare(106)}
                    {renderSquare(107)}
                    {renderSquare(108)}
                    {renderSquare(109)}
                    {renderSquare(110)}
                    {renderSquare(111)}
                    {renderSquare(112)}
                    {renderSquare(113)}
                    {renderSquare(114)}
                    {renderSquare(115)}
                    {renderSquare(116)}
                    {renderSquare(117)}
                    {renderSquare(118)}
                    {renderSquare(119)}
                </div>
                <div className="board-row">
                    {renderSquare(120)}
                    {renderSquare(121)}
                    {renderSquare(122)}
                    {renderSquare(123)}
                    {renderSquare(124)}
                    {renderSquare(125)}
                    {renderSquare(126)}
                    {renderSquare(127)}
                    {renderSquare(128)}
                    {renderSquare(129)}
                    {renderSquare(130)}
                    {renderSquare(131)}
                    {renderSquare(132)}
                    {renderSquare(133)}
                    {renderSquare(134)}
                </div>
                <div className="board-row">
                    {renderSquare(135)}
                    {renderSquare(136)}
                    {renderSquare(137)}
                    {renderSquare(138)}
                    {renderSquare(139)}
                    {renderSquare(140)}
                    {renderSquare(141)}
                    {renderSquare(142)}
                    {renderSquare(143)}
                    {renderSquare(144)}
                    {renderSquare(145)}
                    {renderSquare(146)}
                    {renderSquare(147)}
                    {renderSquare(148)}
                    {renderSquare(149)}
                </div>
            </Col>
            <Col className="game-board" id="board2">
                <div className="label-player"><h3>Computer</h3></div>
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
                    {renderPlayerSquare(10)}
                    {renderPlayerSquare(11)}
                    {renderPlayerSquare(12)}
                    {renderPlayerSquare(13)}
                    {renderPlayerSquare(14)}
                </div>
                <div className="board-row"> 
                    {renderPlayerSquare(15)}
                    {renderPlayerSquare(16)}
                    {renderPlayerSquare(17)}
                    {renderPlayerSquare(18)}
                    {renderPlayerSquare(19)}
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
                    {renderPlayerSquare(40)}
                    {renderPlayerSquare(41)}
                    {renderPlayerSquare(42)}
                    {renderPlayerSquare(43)}
                    {renderPlayerSquare(44)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(45)}
                    {renderPlayerSquare(46)}
                    {renderPlayerSquare(47)}
                    {renderPlayerSquare(48)}
                    {renderPlayerSquare(49)}
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
                    {renderPlayerSquare(70)}
                    {renderPlayerSquare(71)}
                    {renderPlayerSquare(72)}
                    {renderPlayerSquare(73)}
                    {renderPlayerSquare(74)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(75)}
                    {renderPlayerSquare(76)}
                    {renderPlayerSquare(77)}
                    {renderPlayerSquare(78)}
                    {renderPlayerSquare(79)}
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
                    {renderPlayerSquare(100)}
                    {renderPlayerSquare(101)}
                    {renderPlayerSquare(102)}
                    {renderPlayerSquare(103)}
                    {renderPlayerSquare(104)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(105)}
                    {renderPlayerSquare(106)}
                    {renderPlayerSquare(107)}
                    {renderPlayerSquare(108)}
                    {renderPlayerSquare(109)}
                    {renderPlayerSquare(110)}
                    {renderPlayerSquare(111)}
                    {renderPlayerSquare(112)}
                    {renderPlayerSquare(113)}
                    {renderPlayerSquare(114)}
                    {renderPlayerSquare(115)}
                    {renderPlayerSquare(116)}
                    {renderPlayerSquare(117)}
                    {renderPlayerSquare(118)}
                    {renderPlayerSquare(119)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(120)}
                    {renderPlayerSquare(121)}
                    {renderPlayerSquare(122)}
                    {renderPlayerSquare(123)}
                    {renderPlayerSquare(124)}
                    {renderPlayerSquare(125)}
                    {renderPlayerSquare(126)}
                    {renderPlayerSquare(127)}
                    {renderPlayerSquare(128)}
                    {renderPlayerSquare(129)}
                    {renderPlayerSquare(130)}
                    {renderPlayerSquare(131)}
                    {renderPlayerSquare(132)}
                    {renderPlayerSquare(133)}
                    {renderPlayerSquare(134)}
                </div>
                <div className="board-row">
                    {renderPlayerSquare(135)}
                    {renderPlayerSquare(136)}
                    {renderPlayerSquare(137)}
                    {renderPlayerSquare(138)}
                    {renderPlayerSquare(139)}
                    {renderPlayerSquare(140)}
                    {renderPlayerSquare(141)}
                    {renderPlayerSquare(142)}
                    {renderPlayerSquare(143)}
                    {renderPlayerSquare(144)}
                    {renderPlayerSquare(145)}
                    {renderPlayerSquare(146)}
                    {renderPlayerSquare(147)}
                    {renderPlayerSquare(148)}
                    {renderPlayerSquare(149)}
                </div>
            </Col>
            <div className="game-info">{getStatus()}</div>
            <div className="restart-button">{renderRestartButton()}</div>
        </Row>
        </Container>
    );
}