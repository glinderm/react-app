import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Board } from './components/Board'
/* help converting tic tac toe chassis to use hooks https://medium.com/@shifrb/how-to-build-tic-tac-toe-with-react-hooks-ca37f6040022 */
/*
export function Square({ value, onClick }) {
  return (
      <button className="square" onClick={onClick}>
          {value}
      </button>
  );
}
*/



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