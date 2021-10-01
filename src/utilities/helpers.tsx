
export function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
        return false;
        }
    }
    return true;
}

export function cpuGuess() {
  const guess = Math.floor(Math.random()*100);
  return guess;
}

export function calculateWinner(hp, subCount) {
  if (hp === 0) {
    return "You lose!";
  }
  else if (subCount === 0) {
    return "You win!";
  }
  else {
    return null;
  }
}

export function placeShipsPlayer() {

}

export function placeShipsCPU() {
  
}

export function Restart({ onClick }) {

    return (
      <button className="restart" onClick={onClick}>
        Shake!
      </button>
    );
}