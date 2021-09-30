import { useState } from 'react';
import { Button, Col, Row} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Square } from './Square';

export function Board() {
    
    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                <div className="board-row">
                    <Square value={0} onClick={null}/>
                    <Square value={1} onClick={null}/>
                    <Square value={2} onClick={null}/>
                </div>
                <div className="board-row">
                    <Square value={3} onClick={null}/>
                    <Square value={4} onClick={null}/>
                    <Square value={5} onClick={null}/>
                </div>
                <div className="board-row">
                    <Square value={6} onClick={null}/>
                    <Square value={7} onClick={null}/>
                    <Square value={8} onClick={null}/>
                </div>
                </div>
            </div>
        </div>
    );
}