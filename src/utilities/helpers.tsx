
export function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
        return false;
        }
    }
    return true;
}

export function calculateWinner(playerShips, cpuShips) {
  const refArray = [null, null, null, null, null];
  if (playerShips == refArray) {
    return "Computer";
  } else if (cpuShips == refArray) {
    return "Player";
  }
  return null;
}

export function placeShipsPlayer() {

}

export function placeShipsCPU() {
  
}

export function Restart({ onClick }) {

    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
}