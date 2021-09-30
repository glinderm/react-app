import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export function Square({ value, onClick }) {
  return (
      <button className="square" onClick={onClick}>
          {value}
      </button>
  );
}

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

ReactDOM.render(<Board />, document.getElementById("root"));

/*
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
*/
reportWebVitals();